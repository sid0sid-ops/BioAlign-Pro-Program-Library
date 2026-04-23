import os
import re

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"

for file in os.listdir(base_dir):
    if file.endswith(".cpp"):
        path = os.path.join(base_dir, file)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Comprehensive removal of all sample run / IO metadata lines
        # targeting Input, Output, and Example variants
        new_content = re.sub(r'\n\s*Example Input:.*', '', content, flags=re.IGNORECASE)
        new_content = re.sub(r'\n\s*Example Output:.*', '', new_content, flags=re.IGNORECASE)
        new_content = re.sub(r'\n\s*Input:.*', '', new_content, flags=re.IGNORECASE)
        new_content = re.sub(r'\n\s*Output:.*', '', new_content, flags=re.IGNORECASE)
        
        if new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Purged metadata from {file}")

print("Global metadata purge complete.")
