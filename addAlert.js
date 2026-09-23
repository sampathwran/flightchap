const fs = require('fs');
let fd = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');

fd = fd.replace("const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {", 
  "const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {\n    alert('Heart icon clicked!\\nDeal ID: ' + deal.id + '\\nUser: ' + (user ? user.uid : 'none'));\n    console.log('Heart clicked for deal:', deal);");
  
fs.writeFileSync('components/home/FlashDeals.tsx', fd, 'utf8');
