"""Parse the Instrument Rating ACS text (pdftotext -layout) into structured JSON."""
import json
import re
import sys

src, out = sys.argv[1], sys.argv[2]
lines = open(src, encoding="utf-8").read().splitlines()

ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"]
area_re = re.compile(r"^Area of Operation ([IVX]+)[.,]\s*(.+?)\s*$")
task_re = re.compile(r"^Task ([A-Z])\.\s*(.+?)\s*$")
elem_re = re.compile(r"^\s*(IR\.([IVX]+)\.([A-Z])\.([KRS])(\d+)([a-z]?))\s+(.*\S)\s*$")
footer_re = re.compile(r"^Instrument Rating – Airplane ACS")

areas = {}
order = []
cur_area = cur_task = None
cur_elem = None
mode = None  # 'refs' | 'obj' | 'note' | 'elem'
started = False

def clean_sub(text, letter):
    # strip leading "a. " from sub-element text
    return re.sub(rf"^{letter}\.\s+", "", text) if letter else text

i = 0
skip_header = False
for idx, raw in enumerate(lines):
    line = raw.rstrip()
    if idx < 190:
        continue
    if line.startswith("Appendix 1"):
        break
    if footer_re.match(line):
        skip_header = True  # next non-empty line is the running page header
        continue
    if skip_header:
        if line.strip():
            skip_header = False
        continue
    s = line.strip()
    m = area_re.match(line)
    if m and m.group(1) in ROMAN:
        num = m.group(1)
        if num not in areas:
            areas[num] = {"id": num, "name": m.group(2).strip().rstrip("."), "tasks": []}
            order.append(num)
        cur_area = areas[num]
        cur_elem, mode = None, None
        continue
    m = task_re.match(line)
    if m and cur_area is not None:
        cur_task = {"id": m.group(1), "name": m.group(2), "references": "", "objective": "", "notes": [], "elements": []}
        cur_area["tasks"].append(cur_task)
        cur_elem, mode = None, None
        continue
    if cur_task is None:
        continue
    if s.startswith("References:"):
        cur_task["references"] = s[len("References:"):].strip()
        mode = "refs"; continue
    if s.startswith("Objective:"):
        cur_task["objective"] = s[len("Objective:"):].strip()
        mode = "obj"; continue
    if s.startswith("Note:"):
        cur_task["notes"].append(s[len("Note:"):].strip())
        mode = "note"; continue
    if re.match(r"^(Knowledge|Risk|Management|Skills):?", s):
        # section labels; may contain the lead-in sentence
        mode = None; cur_elem = None
        continue
    m = elem_re.match(line)
    if m:
        code, a, t, kind, n, sub, text = m.groups()
        cur_elem = {"code": code, "type": kind, "num": int(n), "sub": sub or None,
                    "text": clean_sub(text, sub)}
        cur_task["elements"].append(cur_elem)
        mode = "elem"; continue
    if not s:
        if mode in ("refs", "obj", "note"):
            mode = None
        continue
    # continuation
    if mode == "refs":
        cur_task["references"] += " " + s
    elif mode == "obj":
        cur_task["objective"] += " " + s
    elif mode == "note":
        cur_task["notes"][-1] += " " + s
    elif mode == "elem" and cur_elem is not None:
        cur_elem["text"] += " " + s

# attach sub-elements to parents
for a in areas.values():
    for t in a["tasks"]:
        parents = []
        for e in t["elements"]:
            if e["sub"]:
                parent = next(p for p in reversed(parents) if p["type"] == e["type"] and p["num"] == e["num"])
                parent.setdefault("subs", []).append({"code": e["code"], "letter": e["sub"], "text": e["text"]})
            else:
                parents.append(e)
        for p in parents:
            p.pop("sub", None)
        t["elements"] = parents

data = {"acs": "FAA-S-ACS-8C", "title": "Instrument Rating – Airplane", "areas": [areas[k] for k in order]}
json.dump(data, open(out, "w", encoding="utf-8"), indent=1, ensure_ascii=False)

total = sum(len(t["elements"]) for a in data["areas"] for t in a["tasks"])
subs = sum(len(e.get("subs", [])) for a in data["areas"] for t in a["tasks"] for e in t["elements"])
for a in data["areas"]:
    print(a["id"], a["name"], [(t["id"], len(t["elements"])) for t in a["tasks"]])
print("elements", total, "sub-elements", subs)
