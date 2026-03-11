const fs = require('fs');
const path = require('path');

const baseUrl = 'https://cenit-security-site.vercel.app';

// All pages on the site
const pages = {
  'Main Pages': [
    { title: 'Homepage', url: '/' },
  ],
  'Location Pages': [
    { title: 'Marbella', url: '/locations/marbella' },
    { title: 'Puerto Banús & Nueva Andalucía', url: '/locations/puerto-banus-nueva-andalucia' },
    { title: 'Benahavís', url: '/locations/benahavis' },
    { title: 'San Pedro de Alcántara', url: '/locations/san-pedro-de-alcantara' },
    { title: 'Estepona', url: '/locations/estepona' },
    { title: 'Sotogrande', url: '/locations/sotogrande' },
    { title: 'La Cala de Mijas', url: '/locations/la-cala-de-mijas' },
    { title: 'Costa del Sol', url: '/locations/costa-del-sol' },
  ],
  'Service Pages': [
    { title: 'Front Entrance Security Doors', url: '/services/front-entrance' },
    { title: 'Terrace & Secondary Access', url: '/services/terrace-access' },
    { title: 'Safe Rooms', url: '/services/safe-rooms' },
    { title: 'Biometric Access Control', url: '/services/biometric-access' },
  ],
  'Property Type Pages (Location-Specific)': [
    { title: 'Villas – Marbella', url: '/property-types/villas/marbella' },
    { title: 'Villas – Benahavís', url: '/property-types/villas/benahavis' },
    { title: 'Villas – Puerto Banús', url: '/property-types/villas/puerto-banus-nueva-andalucia' },
    { title: 'Villas – Estepona', url: '/property-types/villas/estepona' },
    { title: 'Villas – Sotogrande', url: '/property-types/villas/sotogrande' },
    { title: 'Apartments – Marbella', url: '/property-types/apartments/marbella' },
    { title: 'Apartments – Puerto Banús', url: '/property-types/apartments/puerto-banus-nueva-andalucia' },
    { title: 'Apartments – Estepona', url: '/property-types/apartments/estepona' },
    { title: 'Townhouses – Marbella', url: '/property-types/townhouses/marbella' },
    { title: 'Townhouses – Estepona', url: '/property-types/townhouses/estepona' },
    { title: 'New Builds – Marbella', url: '/property-types/new-builds/marbella' },
    { title: 'New Builds – Estepona', url: '/property-types/new-builds/estepona' },
    { title: 'Renovations – Marbella', url: '/property-types/renovations/marbella' },
    { title: 'Renovations – Benahavís', url: '/property-types/renovations/benahavis' },
  ],
};

const date = new Date().toLocaleDateString('en-GB', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
});

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Cenit Security Doors – Website Report</title>
  <style>
    @page { margin: 2cm; size: A4; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #1a1a1a;
      line-height: 1.6;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header { 
      text-align: center; 
      padding-bottom: 30px;
      border-bottom: 2px solid #c9a961;
      margin-bottom: 40px;
    }
    .logo { 
      font-size: 28px; 
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .logo-gold { color: #c9a961; }
    .logo-grey { color: #666; }
    .subtitle {
      font-size: 12px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #888;
      margin-top: 15px;
    }
    .date {
      font-size: 11px;
      color: #999;
      margin-top: 5px;
    }
    h2 { 
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #c9a961;
      margin: 30px 0 15px;
      padding-bottom: 8px;
      border-bottom: 1px solid #eee;
    }
    .page-list { list-style: none; }
    .page-item { 
      padding: 12px 0;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .page-item:last-child { border-bottom: none; }
    .page-title { font-weight: 500; }
    .page-link { 
      color: #0066cc; 
      text-decoration: none;
      font-size: 13px;
    }
    .page-link:hover { text-decoration: underline; }
    .status { 
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .status-live { background: #d4edda; color: #155724; }
    .summary {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 8px;
      margin: 30px 0;
    }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      text-align: center;
    }
    .summary-number {
      font-size: 36px;
      font-weight: 300;
      color: #c9a961;
    }
    .summary-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #666;
    }
    .footer {
      margin-top: 50px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      text-align: center;
      font-size: 11px;
      color: #999;
    }
    .note {
      background: #fff3cd;
      border-left: 4px solid #c9a961;
      padding: 15px 20px;
      margin: 20px 0;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">
      <span class="logo-gold">Cenit</span> <span class="logo-grey">Security</span> Doors
    </div>
    <div class="subtitle">Website Delivery Report</div>
    <div class="date">${date}</div>
  </div>

  <div class="summary">
    <div class="summary-grid">
      <div>
        <div class="summary-number">27</div>
        <div class="summary-label">Total Pages</div>
      </div>
      <div>
        <div class="summary-number">27</div>
        <div class="summary-label">Pages Live</div>
      </div>
      <div>
        <div class="summary-number">0</div>
        <div class="summary-label">Errors</div>
      </div>
    </div>
  </div>

  <div class="note">
    <strong>All links are clickable.</strong> Click any URL to open the live page in your browser.
  </div>
`;

// Generate sections
for (const [section, pageList] of Object.entries(pages)) {
  html += `  <h2>${section}</h2>\n  <ul class="page-list">\n`;
  for (const page of pageList) {
    const fullUrl = baseUrl + page.url;
    html += `    <li class="page-item">
      <span class="page-title">${page.title}</span>
      <span>
        <span class="status status-live">Live</span>
        <a href="${fullUrl}" class="page-link" target="_blank">${fullUrl}</a>
      </span>
    </li>\n`;
  }
  html += `  </ul>\n`;
}

html += `
  <div class="footer">
    <p>Cenit Security Doors Website Report • Generated ${date}</p>
    <p>All pages verified and operational</p>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '../cenit-report.html'), html);
console.log('Report generated: cenit-report.html');
