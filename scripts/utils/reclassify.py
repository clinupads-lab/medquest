"""Reclassify IAMSPE Q01-20 and pre-existing questions to their correct subjects."""
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
APP_PATH = BASE_DIR / "src" / "App.tsx"

# Map question ID → new subject (and whether to clear subSubject)
RECLASSIFY = {
    # IAMSPE Q01-20: Clínica Médica → specific specialty
    'iamspe_2024_001': 'Pneumologia',        # asma, espirometria
    'iamspe_2024_002': 'Gastroenterologia',  # pancreatite / Sinal de Fox
    'iamspe_2024_003': 'Cardiologia',        # PCR, fibrilação ventricular, IAM
    # Q04 propofol → mantém Clínica Médica (farmacologia anestésica sem sub-esp.)
    'iamspe_2024_005': 'Cardiologia',        # BNP, insuficiência cardíaca
    'iamspe_2024_006': 'Cardiologia',        # nitroglicerina, NO, GMPc
    'iamspe_2024_007': 'Cardiologia',        # Candesartana, AT1, anti-hipertensivo
    'iamspe_2024_008': 'Endocrinologia',     # DM2, resistência à insulina
    'iamspe_2024_009': 'Pneumologia',        # DPOC, espirometria
    'iamspe_2024_010': 'Pneumologia',        # Hipertensão Arterial Pulmonar
    'iamspe_2024_011': 'Infectologia',       # S. pneumoniae, fluoroquinolonas
    'iamspe_2024_012': 'Infectologia',       # ITU em gestante, antibióticos
    'iamspe_2024_013': 'Infectologia',       # Gonorreia, PCR, ceftriaxona
    'iamspe_2024_014': 'Psiquiatria',        # Fluoxetina, depressão maior
    'iamspe_2024_015': 'Reumatologia',       # AINEs, gota, artrite reumatoide
    'iamspe_2024_016': 'Gastroenterologia',  # Insuficiência hepática aguda
    'iamspe_2024_017': 'Gastroenterologia',  # H. pylori, gastrite
    'iamspe_2024_018': 'Endocrinologia',     # Insulina Lantus, DM1
    'iamspe_2024_019': 'Nefrologia',         # DRC, anemia, eritropoietina
    'iamspe_2024_020': 'Pneumologia',        # Asma brônquica, mastócitos

    # Pre-existing questions with wrong/generic subject
    'q3':  'Endocrinologia',    # DM2, glicemia → was Clínica Médica / Endocrinologia
    'q8':  'Cardiologia',       # IAM, Killip → was Clínica Médica / Cardiologia
    'q10': 'Gastroenterologia', # Hemorragia varicosa → was Clínica Médica / Gastroenterologia
}

# IDs where subSubject should be removed (because it would be redundant)
CLEAR_SUB_SUBJECT = {'q3', 'q8', 'q10'}

app = APP_PATH.read_text(encoding='utf-8')
changes = 0

for qid, new_subject in RECLASSIFY.items():
    # Find the question block by id
    id_pattern = re.compile(
        rf"(id:\s*['\"]){re.escape(qid)}(['\"].*?subject:\s*)['\"]([^'\"]+)['\"]",
        re.DOTALL
    )
    match = id_pattern.search(app)
    if not match:
        print(f"WARNING: Could not find question '{qid}'")
        continue

    old_subject = match.group(3)
    if old_subject == new_subject:
        print(f"  {qid}: already '{new_subject}' (no change)")
        continue

    # Replace the subject value
    new_app = id_pattern.sub(
        lambda m: m.group(1) + qid + m.group(2) + f"'{new_subject}'",
        app,
        count=1
    )
    if new_app == app:
        print(f"WARNING: Replacement failed for '{qid}'")
        continue

    app = new_app
    print(f"  {qid}: '{old_subject}' -> '{new_subject}'")
    changes += 1

# Clear redundant subSubject for moved pre-existing questions
for qid in CLEAR_SUB_SUBJECT:
    sub_pattern = re.compile(
        rf"(id:\s*['\"]){re.escape(qid)}['\"].*?(,\s*\n\s*subSubject:\s*['\"][^'\"]*['\"])",
        re.DOTALL
    )
    match = sub_pattern.search(app)
    if match:
        app = sub_pattern.sub(lambda m: m.group(1) + qid + "'", app, count=1)
        print(f"  {qid}: removed subSubject")
    # Note: subSubject removal is optional, skip if pattern doesn't match

APP_PATH.write_text(app, encoding='utf-8')
print(f"\nDone — {changes} subject(s) updated in src/App.tsx")
