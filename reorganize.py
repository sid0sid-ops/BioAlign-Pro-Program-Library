import os

base_dir = r"c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++"

renames = {
    "55_runtime_poly.cpp": "TMP_56_runtime_poly.cpp",
    "56_exception_handling.cpp": "TMP_58_exception_handling.cpp",
    "57_file_handling.cpp": "TMP_59_file_handling.cpp",
    "58_deep_shallow_copy.cpp": "TMP_60_deep_shallow_copy.cpp",
    "59_templates.cpp": "TMP_61_templates.cpp",
    "60_hierarchical_inheritance.cpp": "TMP_55_hierarchical_inheritance.cpp",
    "61_virtual_function.cpp": "TMP_57_virtual_function.cpp"
}

print("Renaming physical files...")
for old, new_tmp in renames.items():
    old_path = os.path.join(base_dir, old)
    if os.path.exists(old_path):
        os.rename(old_path, os.path.join(base_dir, new_tmp))

for _, new_tmp in renames.items():
    final_name = new_tmp.replace("TMP_", "")
    tmp_path = os.path.join(base_dir, new_tmp)
    if os.path.exists(tmp_path):
        os.rename(tmp_path, os.path.join(base_dir, final_name))

print("Keys remapped physically!")
