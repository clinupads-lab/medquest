"""
MedQuest - Scraper de Questões de Residência Médica
====================================================
Baixa PDFs das principais bancas do Brasil e extrai questões
no formato JSON compatível com o App.tsx do MedQuest.

Uso:
    pip install -r requirements.txt
    python scraper.py

Saída:
    - PDFs baixados em ./pdfs/{banca}/
    - Questões extraídas em ./output/questions.json
"""

import os
import re
import json
import time
import logging
import hashlib
import requests
import pdfplumber
import urllib3
from pathlib import Path
from tqdm import tqdm
from bs4 import BeautifulSoup
from typing import Optional

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# ─── Configuração ────────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler("scraper.log", encoding="utf-8"),
    ],
)
log = logging.getLogger(__name__)

BASE_DIR   = Path(__file__).parent
PDF_DIR    = BASE_DIR / "pdfs"
OUTPUT_DIR = BASE_DIR / "output"
PDF_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0 Safari/537.36"
    )
}

SESSION = requests.Session()
SESSION.headers.update(HEADERS)

# ─── Mapa de matérias ────────────────────────────────────────────────────────
# Palavras-chave → matéria do App.tsx

SUBJECT_MAP = {
    # Ciclo Básico
    "anatomia": "Anatomia",
    "fisiologia": "Fisiologia",
    "bioquímica": "Bioquímica", "bioquimica": "Bioquímica",
    "histologia": "Histologia",
    "embriologia": "Embriologia",
    "microbiologia": "Microbiologia",
    "imunologia": "Imunologia",
    "genética": "Genética", "genetica": "Genética",
    "farmacologia": "Farmacologia",
    # Ciclo Clínico
    "clínica médica": "Clínica Médica", "clinica medica": "Clínica Médica",
    "clínica cirúrgica": "Clínica Cirúrgica", "clinica cirurgica": "Clínica Cirúrgica",
    "ginecologia": "Ginecologia & Obstetrícia",
    "obstetrícia": "Ginecologia & Obstetrícia", "obstetricia": "Ginecologia & Obstetrícia",
    "pediatria": "Pediatria",
    "psiquiatria": "Psiquiatria",
    "dermatologia": "Dermatologia",
    "oftalmologia": "Oftalmologia",
    "otorrino": "Otorrinolaringologia",
    "medicina de família": "Medicina de Família/SUS", "medicina de familia": "Medicina de Família/SUS",
    "saúde da família": "Medicina de Família/SUS", "saude da familia": "Medicina de Família/SUS",
    # Internato
    "cardiologia": "Cardiologia",
    "pneumologia": "Pneumologia",
    "gastroenterologia": "Gastroenterologia",
    "nefrologia": "Nefrologia",
    "endocrinologia": "Endocrinologia",
    "neurologia": "Neurologia",
    "hematologia": "Hematologia",
    "infectologia": "Infectologia",
    "reumatologia": "Reumatologia",
    "geriatria": "Geriatria",
    "urgência": "Urgência e Emergência", "urgencia": "Urgência e Emergência",
    "emergência": "Urgência e Emergência", "emergencia": "Urgência e Emergência",
    "ortopedia": "Ortopedia e Traumatologia",
    "traumatologia": "Ortopedia e Traumatologia",
    "urologia": "Urologia",
    "oncologia": "Oncologia",
    "cirurgia geral": "Cirurgia Geral",
    "anestesiologia": "Anestesiologia",
    "medicina legal": "Medicina Legal",
    "saúde coletiva": "Saúde Coletiva", "saude coletiva": "Saúde Coletiva",
    "epidemiologia": "Saúde Coletiva",
    "bioética": "Bioética e Ética Médica", "bioetica": "Bioética e Ética Médica",
}

CYCLE_MAP = {
    "Anatomia": "Ciclo Básico", "Fisiologia": "Ciclo Básico",
    "Bioquímica": "Ciclo Básico", "Histologia": "Ciclo Básico",
    "Embriologia": "Ciclo Básico", "Microbiologia": "Ciclo Básico",
    "Imunologia": "Ciclo Básico", "Genética": "Ciclo Básico",
    "Farmacologia": "Ciclo Básico",
    "Clínica Médica": "Ciclo Clínico", "Clínica Cirúrgica": "Ciclo Clínico",
    "Ginecologia & Obstetrícia": "Ciclo Clínico", "Pediatria": "Ciclo Clínico",
    "Psiquiatria": "Ciclo Clínico", "Dermatologia": "Ciclo Clínico",
    "Oftalmologia": "Ciclo Clínico", "Otorrinolaringologia": "Ciclo Clínico",
    "Medicina de Família/SUS": "Ciclo Clínico",
    "Cardiologia": "Internato", "Pneumologia": "Internato",
    "Gastroenterologia": "Internato", "Nefrologia": "Internato",
    "Endocrinologia": "Internato", "Neurologia": "Internato",
    "Hematologia": "Internato", "Infectologia": "Internato",
    "Reumatologia": "Internato", "Geriatria": "Internato",
    "Urgência e Emergência": "Internato", "Ortopedia e Traumatologia": "Internato",
    "Urologia": "Internato", "Oncologia": "Internato",
    "Cirurgia Geral": "Internato", "Anestesiologia": "Internato",
    "Medicina Legal": "Internato", "Saúde Coletiva": "Internato",
    "Bioética e Ética Médica": "Internato",
}

# ─── Lista de bancas e PDFs diretos ──────────────────────────────────────────

BANCAS = [
    # ── INEP / Revalida ──────────────────────────────────────────────────────
    {
        "banca": "INEP_Revalida",
        "pdfs": [
            "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos/2024/arquivos/2024_2_revalida_prova_objetiva.pdf",
            "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos/2024/arquivos/2024_1_revalida_prova_objetiva.pdf",
            "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos/2023/arquivos/2023_2_revalida_prova_objetiva.pdf",
            "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/revalida/provas-e-gabaritos/2023/arquivos/2023_1_revalida_prova_objetiva.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2024_2_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2024_1_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2023_2_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2023_1_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2022_2_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2022_1_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2021_2_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2021_1_PV_objetiva_regular.pdf",
            "https://download.inep.gov.br/revalida/provas_e_gabaritos/2020_1_PV_objetiva_regular.pdf",
        ],
    },
    # ── EBSERH / ENARE ────────────────────────────────────────────────────────
    {
        "banca": "ENARE_EBSERH",
        "pdfs": [
            "https://enare.ebserh.gov.br/index.php?option=com_content&view=article&id=277",  # será scrapeado
        ],
        "scrape_url": "https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos-medica.html",
    },
    # ── FUVEST / FMUSP ────────────────────────────────────────────────────────
    {
        "banca": "FUVEST_FMUSP",
        "scrape_url": "https://www.fuvest.br/residencia-medica-provas-e-gabarito/",
    },
    # ── COMVEST / Unicamp ─────────────────────────────────────────────────────
    {
        "banca": "COMVEST_Unicamp",
        "pdfs": [
            "https://www.comvest.unicamp.br/residenciamedica2024/provas/rm2024_prova.pdf",
            "https://www.comvest.unicamp.br/residenciamedica2023/provas/rm2023_prova.pdf",
            "https://www.comvest.unicamp.br/residenciamedica2022/provas/rm2022_prova.pdf",
            "https://www.comvest.unicamp.br/residenciamedica2021/provas/rm2021_prova.pdf",
        ],
    },
    # ── VUNESP / SUS-SP ───────────────────────────────────────────────────────
    {
        "banca": "VUNESP_SUS_SP",
        "pdfs": [
            "https://arquivos.qconcursos.com/prova/arquivo_prova/143800/vunesp-2025-ses-sp-residencia-medica-acesso-direto-prova.pdf",
            "https://arquivos.qconcursos.com/prova/arquivo_prova/116347/vunesp-2024-ses-sp-residencia-medica-acesso-direto-prova.pdf",
            "https://arquivos.qconcursos.com/prova/arquivo_prova/91290/vunesp-2023-ses-sp-residencia-medica-prova.pdf",
        ],
    },
    # ── CEPUERJ / UERJ ────────────────────────────────────────────────────────
    {
        "banca": "CEPUERJ_UERJ",
        "scrape_url": "https://www.cepuerj.uerj.br/concursos2.php",
    },
    # ── UFRJ ──────────────────────────────────────────────────────────────────
    {
        "banca": "UFRJ",
        "pdfs": [
            "https://www.residencia.ufrj.br/images/2025/conhecimentos_compressed.pdf",
            "https://www.residencia.ufrj.br/images/2024/conhecimentos.pdf",
            "https://www.residencia.ufrj.br/images/2023/conhecimentos.pdf",
        ],
    },
    # ── AREMG / PSU-MG ────────────────────────────────────────────────────────
    {
        "banca": "AREMG_PSU_MG",
        "scrape_url": "https://www.aremg.org.br/processos-antigos",
    },
    # ── UPENET / SES-PE ───────────────────────────────────────────────────────
    {
        "banca": "UPENET_SES_PE",
        "scrape_url": "https://www.upenet.com.br/concursos/25_RED_MED/",
    },
    # ── FUNDATEC / AMRIGS ─────────────────────────────────────────────────────
    {
        "banca": "FUNDATEC_AMRIGS",
        "pdfs": [
            "https://www.amrigs.org.br/wp-content/uploads/2023/08/Prova-2023.pdf",
            "https://www.amrigs.org.br/wp-content/uploads/2022/09/Prova-AMRIGS-2022.pdf",
            "https://www.amrigs.org.br/wp-content/uploads/2024/08/Prova-2024.pdf",
        ],
    },
    # ── NC-UFPR ───────────────────────────────────────────────────────────────
    {
        "banca": "NC_UFPR",
        "pdfs": [
            "https://www.nc.ufpr.br/concursos_institucionais/coreme2023/provas/coreme2023_prova.pdf",
            "https://www.nc.ufpr.br/concursos_institucionais/coreme2022/provas/coreme2022_prova.pdf",
        ],
    },
    # ── PCI Concursos (agregador, fallback) ───────────────────────────────────
    {
        "banca": "PCI_Concursos",
        "scrape_url": "https://www.pciconcursos.com.br/provas/residencia-medica",
        "max_pdfs": 30,
    },
]

# ─── Funções de download ─────────────────────────────────────────────────────

def download_pdf(url: str, dest: Path, retries: int = 3) -> bool:
    """Baixa um PDF com retry. Retorna True se bem-sucedido."""
    if dest.exists():
        log.info(f"  ↩ Já existe: {dest.name}")
        return True

    for attempt in range(1, retries + 1):
        try:
            log.info(f"  ↓ Baixando ({attempt}/{retries}): {url}")
            resp = SESSION.get(url, timeout=30, stream=True, verify=False)
            resp.raise_for_status()
            with open(dest, "wb") as f:
                for chunk in resp.iter_content(chunk_size=8192):
                    f.write(chunk)
            log.info(f"  ✓ Salvo: {dest.name} ({dest.stat().st_size // 1024} KB)")
            return True
        except Exception as e:
            log.warning(f"  ✗ Tentativa {attempt} falhou: {e}")
            time.sleep(2 * attempt)
    return False


def scrape_pdf_links(url: str, max_pdfs: int = 50) -> list[str]:
    """Extrai links de PDF de uma página HTML."""
    links = []
    try:
        resp = SESSION.get(url, timeout=20, verify=False)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "lxml")
        for a in soup.find_all("a", href=True):
            href = a["href"]
            if href.lower().endswith(".pdf"):
                if href.startswith("http"):
                    links.append(href)
                else:
                    from urllib.parse import urljoin
                    links.append(urljoin(url, href))
    except Exception as e:
        log.warning(f"  ✗ Erro ao scrape {url}: {e}")
    return links[:max_pdfs]

# ─── Extração de questões ────────────────────────────────────────────────────

ALT_PATTERN   = re.compile(r"^([A-E])[).]\s+(.+)")
QUEST_PATTERN = re.compile(
    r"(?:^|\n)\s*(?:Questão|QUESTÃO|QUESTAO|Questao|QUEST.{0,3}O|Q\.?)\s*(\d+)",
    re.MULTILINE | re.IGNORECASE
)


def detect_subject(text: str) -> str:
    """Detecta a matéria com base em palavras-chave no texto."""
    text_low = text.lower()
    for kw, subject in SUBJECT_MAP.items():
        if kw in text_low:
            return subject
    return "Clínica Médica"  # fallback padrão


def extract_text_from_pdf(pdf_path: Path, two_columns: bool = False) -> str:
    """Extrai texto de PDF, tratando layout de duas colunas se necessário."""
    pages_text = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            if two_columns:
                mid = page.width / 2
                left  = page.crop((0, 0, mid, page.height)).extract_text() or ""
                right = page.crop((mid, 0, page.width, page.height)).extract_text() or ""
                text = left + "\n" + right
            else:
                text = page.extract_text() or ""
            if text.strip():
                pages_text.append(text)
    return "\n".join(pages_text)


TWO_COLUMN_BANCAS = {"INEP_Revalida", "FUVEST_FMUSP", "COMVEST_Unicamp"}

def extract_questions(pdf_path: Path, banca: str) -> list[dict]:
    """Extrai questões de um PDF e retorna lista de dicts no formato MedQuest."""
    questions = []
    try:
        two_col = banca in TWO_COLUMN_BANCAS
        full_text = extract_text_from_pdf(pdf_path, two_columns=two_col)
    except Exception as e:
        log.error(f"  ✗ Erro ao abrir PDF {pdf_path.name}: {e}")
        return questions

    # Divide o texto em blocos por questão
    splits = list(QUEST_PATTERN.finditer(full_text))
    if not splits:
        log.warning(f"  ! Nenhum padrão de questão encontrado em {pdf_path.name}")
        return questions

    year = extract_year(pdf_path.stem + pdf_path.parent.name)

    for i, match in enumerate(splits):
        start = match.end()
        end   = splits[i + 1].start() if i + 1 < len(splits) else len(full_text)
        block = full_text[start:end].strip()

        lines       = [l.strip() for l in block.splitlines() if l.strip()]
        alternatives = {}
        stem_lines   = []
        correct_idx  = -1

        for line in lines:
            m = ALT_PATTERN.match(line)
            if m:
                letter = m.group(1)
                alternatives[letter] = m.group(2).strip()
            else:
                if not alternatives:   # ainda no enunciado
                    stem_lines.append(line)

        if len(alternatives) < 2:
            continue   # pula questões sem alternativas reconhecíveis

        enunciado = " ".join(stem_lines).strip()
        if len(enunciado) < 20:
            continue

        subject = detect_subject(enunciado + " ".join(alternatives.values()))
        cycle   = CYCLE_MAP.get(subject, "Ciclo Clínico")

        alt_list = [alternatives.get(l, "") for l in "ABCDE" if alternatives.get(l)]
        if not alt_list:
            continue

        uid = hashlib.md5(f"{banca}{enunciado}".encode()).hexdigest()[:12]

        questions.append({
            "id": uid,
            "cycle": cycle,
            "subject": subject,
            "subsubject": "",
            "banca": banca,
            "year": year,
            "enunciado": enunciado,
            "alternatives": alt_list,
            "correctIndex": correct_idx,   # -1 = aguardando gabarito
            "explanation": "",
            "difficulty": "medium",
        })

    log.info(f"  ✓ {len(questions)} questões extraídas de {pdf_path.name}")
    return questions


def extract_year(text: str) -> int:
    m = re.search(r"(20\d{2})", text)
    return int(m.group(1)) if m else 0

# ─── Pipeline principal ───────────────────────────────────────────────────────

def run():
    all_questions: list[dict] = []
    seen_ids: set[str] = set()

    for banca_cfg in BANCAS:
        banca_name = banca_cfg["banca"]
        banca_dir  = PDF_DIR / banca_name
        banca_dir.mkdir(parents=True, exist_ok=True)

        log.info(f"\n{'='*60}")
        log.info(f"Banca: {banca_name}")
        log.info(f"{'='*60}")

        # Coleta URLs de PDFs
        pdf_urls: list[str] = list(banca_cfg.get("pdfs", []))

        scrape_url = banca_cfg.get("scrape_url")
        if scrape_url:
            max_pdfs = banca_cfg.get("max_pdfs", 50)
            log.info(f"  Scrapando links de: {scrape_url}")
            scraped = scrape_pdf_links(scrape_url, max_pdfs)
            log.info(f"  {len(scraped)} links encontrados via scrape")
            pdf_urls.extend(scraped)

        if not pdf_urls:
            log.warning(f"  Nenhum PDF encontrado para {banca_name}")
            continue

        # Baixa e extrai
        for url in tqdm(pdf_urls, desc=banca_name):
            fname = sanitize_filename(url, banca_name)
            dest  = banca_dir / fname

            ok = download_pdf(url, dest)
            if not ok:
                continue

            time.sleep(0.5)   # respeita rate limit

            qs = extract_questions(dest, banca_name)
            for q in qs:
                if q["id"] not in seen_ids:
                    seen_ids.add(q["id"])
                    all_questions.append(q)

    # Salva resultado
    out_path = OUTPUT_DIR / "questions.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)

    log.info(f"\n{'='*60}")
    log.info(f"✅ Total: {len(all_questions)} questões únicas salvas em {out_path}")

    # Resumo por banca
    from collections import Counter
    bancas_count = Counter(q["banca"] for q in all_questions)
    for b, cnt in sorted(bancas_count.items(), key=lambda x: -x[1]):
        log.info(f"   {b}: {cnt} questões")


def sanitize_filename(url: str, prefix: str) -> str:
    name = url.split("/")[-1].split("?")[0]
    if not name.lower().endswith(".pdf"):
        name = hashlib.md5(url.encode()).hexdigest()[:10] + ".pdf"
    return name


if __name__ == "__main__":
    run()
