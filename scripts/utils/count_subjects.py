import re
from pathlib import Path
from collections import Counter

BASE_DIR = Path(__file__).parent.parent.parent
app = (BASE_DIR / "src" / "App.tsx").read_text(encoding="utf-8")
subjects = re.findall(r"subject: '([^']+)'", app)
counts = Counter(subjects)
for s, n in sorted(counts.items(), key=lambda x: -x[1]):
    print(f"{n:3d}  {s!r}")
