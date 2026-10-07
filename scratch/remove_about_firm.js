const fs = require('fs');
const filepath = 'd:/computer-repairing/data/templates.json';

const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
const categories = data.categories || {};
let modified = false;

for (const catName in categories) {
    const sections = categories[catName].sections || {};
    if (sections.AboutFirm) {
        delete sections.AboutFirm;
        modified = true;
        console.log(`Removed AboutFirm from ${catName}`);
    }
}

if (modified) {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Saved changes.');
} else {
    console.log('AboutFirm not found in any category.');
}
