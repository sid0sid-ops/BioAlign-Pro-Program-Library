import urllib.request
import os

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"

css_urls = [
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css"
]

js_urls = [
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-c.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-cpp.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"
]

css_content = "/* --- PRISM.JS CSS INLINED --- */\n"
for url in css_urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    css_content += urllib.request.urlopen(req).read().decode('utf-8') + "\n"

js_content = "/* --- PRISM.JS CORE & PLUGINS INLINED --- */\n"
for url in js_urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    js_content += urllib.request.urlopen(req).read().decode('utf-8') + "\n"

style_path = os.path.join(base_dir, "style.css")
with open(style_path, "r", encoding="utf-8") as f:
    orig_css = f.read()
if "PRISM.JS CSS INLINED" not in orig_css:
    with open(style_path, "w", encoding="utf-8") as f:
        f.write(css_content + "\n" + orig_css)

script_path = os.path.join(base_dir, "script.js")
with open(script_path, "r", encoding="utf-8") as f:
    orig_js = f.read()
if "PRISM.JS CORE & PLUGINS INLINED" not in orig_js:
    with open(script_path, "w", encoding="utf-8") as f:
        f.write(js_content + "\n" + orig_js)

print("Inlined Prism CSS and JS successfully!")
