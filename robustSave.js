const fs = require('fs');
let fd = fs.readFileSync('components/home/FlashDeals.tsx', 'utf8');

// Replace the entire toggleSaveDeal with a robust try/catch one
const oldFn = `const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {
    alert('Heart icon clicked!\\nDeal ID: ' + deal.id + '\\nUser: ' + (user ? user.uid : 'none'));
    console.log('Heart clicked for deal:', deal);
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    
    const dealRef = doc(db, \`users/\${user.uid}/saved_deals\`, deal.id);
    if (savedDealIds.has(deal.id)) {
      await deleteDoc(dealRef);
    } else {
      await setDoc(dealRef, {
        dealId: deal.id,
        title: deal.title,
        discount: deal.discount,
        imageUrl: deal.imageUrl,
        targetUrl: deal.targetUrl,
        savedAt: new Date().toISOString()
      });
    }
  };`;

const newFn = `const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      alert("Please login first!");
      router.push('/login');
      return;
    }
    
    try {
      const dealRef = doc(db, \`users/\${user.uid}/saved_deals\`, deal.id);
      if (savedDealIds.has(deal.id)) {
        await deleteDoc(dealRef);
      } else {
        await setDoc(dealRef, {
          dealId: deal.id,
          title: deal.title || '',
          discount: deal.discount || deal.discountBadge || '',
          imageUrl: deal.imageUrl || '',
          targetUrl: deal.targetUrl || '',
          savedAt: new Date().toISOString()
        });
      }
    } catch (error: any) {
      alert("Database error: " + error.message);
      console.error(error);
    }
  };`;

fd = fd.replace(oldFn, newFn);
fs.writeFileSync('components/home/FlashDeals.tsx', fd, 'utf8');

let md = fs.readFileSync('components/home/MemberDeals.tsx', 'utf8');
const oldMdFn = `const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      router.push('/login');
      return;
    }
    
    const dealRef = doc(db, \`users/\${user.uid}/saved_deals\`, deal.id);
    if (savedDealIds.has(deal.id)) {
      await deleteDoc(dealRef);
    } else {
      await setDoc(dealRef, {
        dealId: deal.id,
        title: deal.title,
        discount: deal.discount,
        imageUrl: deal.imageUrl,
        targetUrl: deal.targetUrl,
        savedAt: new Date().toISOString()
      });
    }
  };`;
md = md.replace(oldMdFn, newFn);
fs.writeFileSync('components/home/MemberDeals.tsx', md, 'utf8');

