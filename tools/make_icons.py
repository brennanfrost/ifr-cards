"""Render app icons from SVG using headless Chrome (Playwright)."""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

out = Path(sys.argv[1])
out.mkdir(parents=True, exist_ok=True)

def icon_svg(pad: float) -> str:
    # pad = fraction of canvas left as safe margin (maskable needs more)
    s = 512
    r = s * (0.5 - pad) * 0.86
    cx = cy = s / 2
    return f"""<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {s} {s}' width='{s}' height='{s}'>
<defs>
 <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#7a1404'/><stop offset='1' stop-color='#5a0d02'/></linearGradient>
 <clipPath id='c'><circle cx='{cx}' cy='{cy}' r='{r}'/></clipPath>
</defs>
<rect width='{s}' height='{s}' fill='url(#bg)'/>
<g clip-path='url(#c)'>
 <rect width='{s}' height='{s}' fill='#8fb4d3'/>
 <path d='M0 {cy + r*0.16} L{s} {cy - r*0.16} V{s} H0Z' fill='#c4562c'/>
 <path d='M0 {cy + r*0.16} L{s} {cy - r*0.16}' stroke='#f3eee7' stroke-width='{r*0.07}'/>
</g>
<circle cx='{cx}' cy='{cy}' r='{r}' fill='none' stroke='#f3eee7' stroke-width='{r*0.13}'/>
<path d='M{cx - r*0.6} {cy + r*0.02} h{r*0.36} l{r*0.24} {r*0.2} l{r*0.24} {-r*0.2} h{r*0.36}' fill='none' stroke='#f3eee7' stroke-width='{r*0.15}' stroke-linecap='round' stroke-linejoin='round'/>
</svg>"""

(out / "favicon.svg").write_text(icon_svg(0.04))
targets = [("icon-192.png", 192, 0.04), ("icon-512.png", 512, 0.04), ("maskable-512.png", 512, 0.16), ("apple-touch-icon.png", 180, 0.08)]
with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
    pg = b.new_page()
    for name, size, pad in targets:
        pg.set_viewport_size({"width": size, "height": size})
        svg = icon_svg(pad).replace("width='512' height='512'>", f"width='{size}' height='{size}'>", 1)
        pg.set_content(f"<html><body style='margin:0'>{svg}</body></html>")
        pg.screenshot(path=str(out / name), clip={"x": 0, "y": 0, "width": size, "height": size})
    b.close()
print("icons written to", out)
