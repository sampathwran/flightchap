export default function DealsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">All Flash Deals</h1>
      <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-slate-200">
        <p className="text-slate-500">
          This page will fetch and display all active flash deals from the Firebase admin panel.
        </p>
      </div>
    </div>
  );
}
