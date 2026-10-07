import json
import os

filepath = 'd:/computer-repairing/data/templates.json'

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

categories = data.get('categories', {})
modified = False

for category_name, category_data in categories.items():
    sections = category_data.get('sections', {})
    if 'AboutFirm' in sections:
        del sections['AboutFirm']
        modified = True
        print(f"Removed AboutFirm from {category_name}")

if modified:
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print("Saved changes.")
else:
    print("AboutFirm not found in any category.")
