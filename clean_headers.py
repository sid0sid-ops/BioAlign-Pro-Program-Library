import os
import re

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"

# Pre-extract data from data.js
data_js_path = os.path.join(base_dir, 'src', 'data.js')
file_metadata = {}
if os.path.exists(data_js_path):
    with open(data_js_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Very simple regex extraction
        matches = re.finditer(r"id:\s*'([^']+)',.*?title:\s*'([^']+)',\s*concept:\s*'([^']+)',\s*description:\s*'([^']+)'", content, re.DOTALL)
        for m in matches:
            file_metadata[m.group(1)] = {
                'title': m.group(2).split('. ', 1)[-1] if '. ' in m.group(2) else m.group(2),
                'concept': m.group(3),
                'description': m.group(4)
            }

for f in os.listdir(base_dir):
    if f.endswith('.cpp'):
        filepath = os.path.join(base_dir, f)
        with open(filepath, 'r', encoding='utf-8') as file:
            code = file.read()
            
        # Remove any block comments containing Algorithm: or Step X:
        code = re.sub(r'/\*[\s\S]*?(?:Algorithm|Step\s*\d+)[\s\S]*?\*/', '', code, flags=re.IGNORECASE)
        # Remove any line comments containing Algorithm: or Step X:
        code = re.sub(r'//.*(?:Algorithm|Step\s*\d+).*', '', code, flags=re.IGNORECASE)
        
        # Remove existing // W.A.P. lines to avoid duplication
        code = re.sub(r'//\s*W\.A\.P\..*\n', '', code, flags=re.IGNORECASE)
        # Remove existing standard program block if any
        code = re.sub(r'/\*\s*Program Name:[\s\S]*?\*/\s*', '', code, flags=re.IGNORECASE)

        # Clear out leading blank lines
        code = code.lstrip()

        # Build new header
        meta = file_metadata.get(f, {
            'title': f.replace('.cpp','').replace('_', ' ').title(),
            'concept': 'C++ Standard Operation',
            'description': 'A standard bio-informatics logic sample.'
        })

        header = f"// W.A.P. to demo {meta['concept']}\n"
        header += "/*\n"
        header += f"Program Name: {meta['title']}\n"
        header += f"Description: {meta['description']}\n"
        header += f"Concepts Used: {meta['concept']}\n"
        header += "*/\n\n"

        code = header + code

        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(code)

print("Files standardized successfully.")
