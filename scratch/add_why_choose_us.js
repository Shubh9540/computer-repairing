const fs = require('fs');
const filepath = 'd:/computer-repairing/data/templates.json';
const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

const whyChooseUsData = {
  "subtitle": "WHY CHOOSE US",
  "title1": "Why Choose",
  "titleHighlight": "TechFix?",
  "description": "We are committed to providing reliable, affordable and high-quality computer and laptop repair services with complete customer satisfaction.",
  "features": [
    {
      "id": "wcu1",
      "icon": "FaShieldAlt",
      "title": "Experienced Technicians",
      "description": "Our skilled and certified technicians have years of hands-on experience."
    },
    {
      "id": "wcu2",
      "icon": "FaCog",
      "title": "Quick & Reliable Service",
      "description": "We diagnose and fix issues quickly to minimize your downtime."
    },
    {
      "id": "wcu3",
      "icon": "FaCoins",
      "title": "Affordable Pricing",
      "description": "Get high-quality repair services at competitive and transparent prices."
    },
    {
      "id": "wcu4",
      "icon": "FaAward",
      "title": "Genuine Parts",
      "description": "We use only genuine and high-quality parts for long-lasting performance."
    },
    {
      "id": "wcu5",
      "icon": "FaHeadset",
      "title": "Dedicated Support",
      "description": "Our support team is always ready to assist you, before and after the service."
    },
    {
      "id": "wcu6",
      "icon": "FaUsers",
      "title": "Customer Satisfaction",
      "description": "We prioritize customer happiness and build long-term relationships."
    }
  ],
  "button": {
    "text": "Book a Repair ->",
    "url": "/contact"
  },
  "image": "/banner/ban2.jpg",
  "stats": {
    "count": "1000+",
    "label": "Satisfied\\nCustomers",
    "icon": "FaUsers"
  }
};

if (data.categories && data.categories['Computer Repair'] && data.categories['Computer Repair'].sections) {
  data.categories['Computer Repair'].sections['WhyChooseUs'] = {
    "variants": {
      "Computer RepairWhyChooseUs1": whyChooseUsData
    }
  };
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Added WhyChooseUs data');
}
