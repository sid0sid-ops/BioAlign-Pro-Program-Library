import os

bd = r'c:\Users\Siddharth Tripathi\OneDrive\Desktop\C++'
os.rename(os.path.join(bd, '54_class_object.cpp'), os.path.join(bd, 'TEMP.cpp'))
for i in range(53, 31, -1):
  for f in os.listdir(bd):
    if f.startswith(f'{i}_') and f.endswith('.cpp'):
      os.rename(os.path.join(bd, f), os.path.join(bd, f.replace(f'{i}_', f'{i+1}_', 1)))
      break
os.rename(os.path.join(bd, 'TEMP.cpp'), os.path.join(bd, '32_class_object.cpp'))

dp = os.path.join(bd, 'src', 'data.js')
with open(dp, 'r', encoding='utf-8') as file:
    c = file.read()

for i in range(53, 31, -1):
    c = c.replace(f"id: '{i}_", f"id: '{i+1}_")
    c = c.replace(f"title: '{i}. ", f"title: '{i+1}. ")

c = c.replace("id: '54_class_object.cpp'", "id: '32_class_object.cpp'")
c = c.replace("title: '54. Class & Object", "title: '32. Class & Object")
c = c.replace("title: '55. Class & Object", "title: '32. Class & Object") 

with open(dp, 'w', encoding='utf-8') as file:
    file.write(c)

print("Bump script executed successfully.")
