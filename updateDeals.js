const fs = require('fs');

function updateDealsFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add imports
  if (!content.includes('import { doc, setDoc, deleteDoc, getDoc }')) {
    content = content.replace("import { db } from '@/lib/firebase';", 
      "import { db } from '@/lib/firebase';\nimport { doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';");
  }

  // 2. Add state inside the component
  if (!content.includes('const [savedDealIds, setSavedDealIds] = useState<Set<string>>')) {
    content = content.replace('const [loading, setLoading] = useState(true);',
      `const [loading, setLoading] = useState(true);
  const [savedDealIds, setSavedDealIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) {
      setSavedDealIds(new Set());
      return;
    }
    const unsub = onSnapshot(collection(db, \`users/\${user.uid}/saved_deals\`), (snapshot) => {
      const ids = new Set<string>();
      snapshot.forEach(doc => ids.add(doc.id));
      setSavedDealIds(ids);
    });
    return () => unsub();
  }, [user]);

  const toggleSaveDeal = async (e: React.MouseEvent, deal: any) => {
    e.preventDefault();
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
  };`);
  }

  // 3. Add the Heart icon to the UI overlay
  // Look for: className="absolute top-3 right-3 bg-orange-500 ...
  if (!content.includes('toggleSaveDeal')) {
    content = content.replace(/<div className="absolute top-3 right-3 bg-orange-500/g, 
    `<button onClick={(e) => toggleSaveDeal(e, deal)} className="absolute top-3 left-3 bg-white/90 hover:bg-slate-50 p-2 rounded-full text-red-500 shadow-md transition z-20">
                  <Heart className={\`h-4 w-4 \${savedDealIds.has(deal.id) ? 'fill-current' : ''}\`} />
                </button>
                <div className="absolute top-3 right-3 bg-orange-500`);
  }

  // 4. Import Heart if not present
  if (!content.includes('Heart,')) {
    content = content.replace('ArrowRight } from \'lucide-react\'', 'ArrowRight, Heart } from \'lucide-react\'');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

updateDealsFile('components/home/FlashDeals.tsx');
updateDealsFile('components/home/MemberDeals.tsx');
console.log("Updated Deal components!");
