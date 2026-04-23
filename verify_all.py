import os
import re
import json

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"
src_dir = os.path.join(base_dir, "src")

print("--- GLOBAL CODEBASE AUDIT ---")

# 1. Gather all cpp files
cpp_files = [f for f in os.listdir(base_dir) if f.endswith('.cpp')]
print(f"Total .cpp files found: {len(cpp_files)}")

# 2. Check numbering contiguity
numbers = []
file_map = {}
for f in cpp_files:
    match = re.match(r'^(\d+)_', f)
    if match:
        num = int(match.group(1))
        numbers.append(num)
        file_map[num] = f
    else:
        print(f"WARNING: File {f} does not start with a number prefix!")

numbers.sort()
missing = []
for i in range(1, 52):
    if i not in numbers:
        missing.append(i)

if missing:
    print(f"ERROR: Missing file numbers: {missing}")
else:
    print("SUCCESS: Files 1 through 51 are perfectly contiguous.")
    
# 3. Check for int main() in all files
missing_main = []
for f in cpp_files:
    path = os.path.join(base_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        if "main()" not in content:
            missing_main.append(f)

if missing_main:
    print(f"ERROR: The following files are missing a main() function: {missing_main}")
else:
    print("SUCCESS: All files contain a main() function.")

# 4. Check references in src/data.js
data_js_path = os.path.join(src_dir, "data.js")
try:
    with open(data_js_path, 'r', encoding='utf-8') as f:
        data_content = f.read()
        missing_in_data = [f for f in cpp_files if f"id: '{f}'" not in data_content]
        if missing_in_data:
            print(f"ERROR: Files missing in App.Data: {missing_in_data}")
        else:
            print("SUCCESS: All 51 files are properly registered in src/data.js.")
            
        # Verify title numbering exactly matches filename numbering
        title_mismatches = []
        for num, f in file_map.items():
            # Looking for title: 'num. 
            if re.search(fr"title:\s*'{num}\.", data_content) is None:
                title_mismatches.append(f)
        if title_mismatches:
            print(f"ERROR: Title numbering mismatch for: {title_mismatches}")
        else:
            print("SUCCESS: Title numbering in src/data.js perfectly matches file prefixes.")
            
except Exception as e:
    print(f"ERROR reading data.js: {e}")

# 5. Check references in src/simulator.js
sim_js_path = os.path.join(src_dir, "simulator.js")
try:
    with open(sim_js_path, 'r', encoding='utf-8') as f:
        sim_content = f.read()
        missing_in_sim = [f for f in cpp_files if f"'{f}':" not in sim_content]
        if missing_in_sim:
            print(f"ERROR: Files missing mock output in App.Simulator: {missing_in_sim}")
        else:
            print("SUCCESS: All 51 files have precise outputs in src/simulator.js.")
except Exception as e:
    print(f"ERROR reading simulator.js: {e}")

print("-----------------------------")
