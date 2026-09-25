const fs = require('fs');

const path = 'app/[locale]/profile/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add states
if (!content.includes('const [isSubscribing, setIsSubscribing] = useState(false);')) {
  content = content.replace(
    'const [savedDeals, setSavedDeals] = useState<any[]>([]);',
    `const [savedDeals, setSavedDeals] = useState<any[]>([]);\n  const [isSubscribing, setIsSubscribing] = useState(false);\n  const [subscribeSuccess, setSubscribeSuccess] = useState(false);`
  );
}

// Add function
if (!content.includes('const handleSubscribeAlerts = async () => {')) {
  const func = `
  const handleSubscribeAlerts = async () => {
    if (!user?.email) return;
    setIsSubscribing(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email }),
      });
      setSubscribeSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubscribing(false);
    }
  };
`;
  content = content.replace('const handleLogout = async () => {', func + '\n  const handleLogout = async () => {');
}

// Replace Alerts UI
const alertsUIOld = `            {activeTab === 'alerts' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('alertsTitle')}</h2>
                <p className="text-slate-500 mb-8">{t('alertsSubtitle')}</p>
                
                <div className="space-y-4">
                  {fareAlerts.map(alert => (
                    <div key={alert.id} className="flex flex-col sm:flex-row items-center justify-between p-5 border border-slate-200 rounded-xl hover:border-blue-200 transition bg-slate-50/50">
                      <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                          <Plane className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 font-bold text-slate-800">
                            {alert.from} <span className="text-slate-400">?</span> {alert.to}
                          </div>
                          <div className="text-sm text-slate-500 mt-1">
                            Target: <span className="font-bold text-green-600">{alert.targetPrice}</span>  Current: {alert.currentPrice}
                          </div>
                        </div>
                      </div>
                      <button className="w-full sm:w-auto px-4 py-2 text-sm text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition font-medium border border-slate-200 sm:border-none">
                        Remove
                      </button>
                    </div>
                  ))}
                  
                  <button className="w-full py-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition font-medium flex items-center justify-center gap-2">
                    <Bell className="h-5 w-5" /> Add New Fare Alert (Coming Soon)
                  </button>
                </div>
              </div>
            )}`;

const alertsUINew = `            {activeTab === 'alerts' && (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('alertsTitle')}</h2>
                <p className="text-slate-500 mb-8">{t('alertsSubtitle')}</p>
                
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                  <Bell className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Subscribe to Fare Alerts</h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">Get notified instantly when prices drop on popular routes. We will send the latest discounts directly to <strong>{user?.email}</strong>.</p>
                  
                  {subscribeSuccess ? (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold">
                      <CheckCircle className="h-5 w-5" /> Successfully Subscribed!
                    </div>
                  ) : (
                    <button 
                      onClick={handleSubscribeAlerts}
                      disabled={isSubscribing}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
                    >
                      {isSubscribing ? 'Subscribing...' : 'Subscribe to Alerts'}
                    </button>
                  )}
                </div>
              </div>
            )}`;

// wait, the regex to replace might be easier if I just find the block.
const startIndex = content.indexOf("{activeTab === 'alerts' && (");
const endIndex = content.indexOf("{activeTab === 'promos' && (");
if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  content = before + alertsUINew + '\n\n            ' + after;
  fs.writeFileSync(path, content, 'utf8');
  console.log("Successfully patched Profile alerts");
} else {
  console.log("Could not find alerts section");
}
