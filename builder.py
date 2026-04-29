import os
import json
import re

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"
src_dir = os.path.join(base_dir, "src")

# 1. Gather all C++ contents
cpp_contents = {}
for i in range(1, 100):
    for f in os.listdir(base_dir):
        if f.startswith(f"{i}_") and f.endswith(".cpp"):
            path = os.path.join(base_dir, f)
            with open(path, "r", encoding="utf-8") as file:
                cpp_contents[f] = file.read()
            break

# 2. Extract Prism Core from existing script.js to prepend it safely.
script_path = os.path.join(base_dir, "script.js")
prism_part = ""
if os.path.exists(script_path):
    with open(script_path, "r", encoding="utf-8") as f:
        orig = f.read()
    match = re.search(r'(/\* --- PRISM\.JS CORE.*?INLINED --- \*/.*?)(?=\s*window\.App\s*=|/\*\*|const cppFiles|let currentActiveHash)', orig, re.DOTALL)
    if match:
        prism_part = match.group(1).strip() + "\n\n"
    else:
        print("Warning: Could not extract Prism from script.js")

# 3. Concatenate Modules
modules = ["data.js", "search.js", "ui.js", "viewer.js", "simulator.js", "manual_diagrams.js", "diagrams.js", "background.js", "main.js"]
combined_js = prism_part + f"window.__CPP_CONTENTS__ = {json.dumps(cpp_contents)};\n\nwindow.App = {{}};\n\n"

for mod in modules:
    mod_path = os.path.join(src_dir, mod)
    if os.path.exists(mod_path):
        with open(mod_path, "r", encoding="utf-8") as f:
            combined_js += f"// --- MODULE: {mod} ---\n"
            combined_js += f.read() + "\n\n"
    else:
        print(f"Warning: {mod} not found in src/")

with open(script_path, "w", encoding="utf-8") as f:
    f.write(combined_js)
print("Compiled script.js successfully")

# 4. Compile HTML Modules
html_modules = ["head.html", "nav.html", "sidebar.html", "editor_layout.html", "footer.html"]
full_html = ""

for html_mod in html_modules:
    mod_path = os.path.join(base_dir, "modules", html_mod)
    if os.path.exists(mod_path):
        with open(mod_path, "r", encoding="utf-8") as f:
            full_html += f"<!-- START MODULE: {html_mod} -->\n"
            full_html += f.read() + "\n"
            full_html += f"<!-- END MODULE: {html_mod} -->\n\n"
    else:
        print(f"Warning: {html_mod} not found in modules/")

if full_html:
    with open(os.path.join(base_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(full_html)
    print("Compiled index.html successfully")
