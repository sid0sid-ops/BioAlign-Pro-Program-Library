import os
import re
import shutil

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"
src_dir = os.path.join(base_dir, "src")

# Pre-cleanup dead files
for dead in ["50_fibonacci_sum.cpp", "51_fibonacci_upto.cpp"]:
    try:
        os.remove(os.path.join(base_dir, dead))
    except: pass

# 1. Rename files on disk (going backwards from 49 down to 12)
for i in range(49, 11, -1):
    # Find file starting with i_
    for f in os.listdir(base_dir):
        if f.startswith(f"{i}_") and f.endswith(".cpp"):
            old_path = os.path.join(base_dir, f)
            new_name = f.replace(f"{i}_", f"{i+2}_", 1)
            new_path = os.path.join(base_dir, new_name)
            os.rename(old_path, new_path)
            print(f"Renamed: {f} -> {new_name}")

# Now rename the two new fibonacci files into the 12 and 13 slots
try:
    os.rename(os.path.join(base_dir, "50_fibonacci_while_limit.cpp"), os.path.join(base_dir, "12_fibonacci_while_limit.cpp"))
    print("Renamed 50_fibonacci_while_limit.cpp -> 12_fibonacci_while_limit.cpp")
except: pass
try:
    os.rename(os.path.join(base_dir, "51_fibonacci_for_limit.cpp"), os.path.join(base_dir, "13_fibonacci_for_limit.cpp"))
    print("Renamed 51_fibonacci_for_limit.cpp -> 13_fibonacci_for_limit.cpp")
except: pass

# 2. Update src/data.js
data_js_path = os.path.join(src_dir, "data.js")
with open(data_js_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Replace backwards to avoid replacing 12 with 14, then 14 with 16
for i in range(49, 11, -1):
    data_content = data_content.replace(f"id: '{i}_", f"id: '{i+2}_")
    data_content = data_content.replace(f"title: '{i}. ", f"title: '{i+2}. ")

# Move 50 and 51 fibonacci entries back to 12 and 13 in data.js
data_content = data_content.replace("id: '50_fibonacci_while_limit.cpp'", "id: '12_fibonacci_while_limit.cpp'")
data_content = data_content.replace("title: '50. Fibonacci", "title: '12. Fibonacci")

data_content = data_content.replace("id: '51_fibonacci_for_limit.cpp'", "id: '13_fibonacci_for_limit.cpp'")
data_content = data_content.replace("title: '51. Fibonacci", "title: '13. Fibonacci")

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(data_content)

# 3. Update src/simulator.js
sim_js_path = os.path.join(src_dir, "simulator.js")
with open(sim_js_path, 'r', encoding='utf-8') as f:
    sim_content = f.read()

for i in range(49, 11, -1):
    sim_content = sim_content.replace(f"'{i}_", f"'{i+2}_")

sim_content = sim_content.replace("'50_fibonacci_while_limit.cpp'", "'12_fibonacci_while_limit.cpp'")
sim_content = sim_content.replace("'51_fibonacci_for_limit.cpp'", "'13_fibonacci_for_limit.cpp'")

with open(sim_js_path, 'w', encoding='utf-8') as f:
    f.write(sim_content)

print("Bump script finished successfully.")
