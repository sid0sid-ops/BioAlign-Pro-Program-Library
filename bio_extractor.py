import os
import re

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"
notes = {}

for file in os.listdir(base_dir):
    if file.endswith(".cpp"):
        path = os.path.join(base_dir, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract note
        match = re.search(r'Bioinformatics Note:.*', content, re.IGNORECASE)
        if match:
            notes[file] = match.group(0).replace('Bioinformatics Note:', '').strip()
            # Remove the line
            new_content = re.sub(r'\n\s*Bioinformatics Note:.*', '', content, flags=re.IGNORECASE)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Extracted and removed note from {file}")

print("Extraction complete.")
print(notes)
