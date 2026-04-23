import os
import re

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"

for file in os.listdir(base_dir):
    if file.endswith(".cpp"):
        path = os.path.join(base_dir, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if cin is present in the code
        if 'cin' in content:
            print(f"Cleaning {file}...")
            # Remove Example Input and Example Output lines
            new_content = re.sub(r'\n\s*Example Input:.*', '', content)
            new_content = re.sub(r'\n\s*Example Output:.*', '', new_content)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file}")

print("Cleanup complete.")
