"""Add banca field to existing questions in App.tsx."""
import re
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
APP_PATH = BASE_DIR / "src" / "App.tsx"
app = APP_PATH.read_text(encoding='utf-8')

# Add banca to IAMSPE questions (after their id line)
app = re.sub(
    r"(id: 'iamspe_2024_\d+',)",
    lambda m: m.group(1) + "\n    banca: 'IAMSPE',",
    app
)

# Add banca to CERMAM questions
app = re.sub(
    r"(id: 'cermam_am_2009_\d+',)",
    lambda m: m.group(1) + "\n    banca: 'CERMAM',",
    app
)

APP_PATH.write_text(app, encoding='utf-8')
iamspe_count = app.count("banca: 'IAMSPE'")
cermam_count = app.count("banca: 'CERMAM'")
print(f"IAMSPE: {iamspe_count}")
print(f"CERMAM: {cermam_count}")
