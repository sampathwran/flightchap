import { ArrowRight, PlaneTakeoff } from 'lucide-react';
import Link from 'next/link';

export default function RecentViews() {
  // In a real app, this would come from localStorage or API
  const recentSearches = [
    { id: 1, from: 'Colombo (CMB)', to: 'London (LHR)', date: 'Oct 15 - Oct 22', type: 'Round-trip' },
    { id: 2, from: 'Colombo (CMB)', to: 'Male (MLE)', date: 'Nov 01 - Nov 05', type: 'Round-trip' },
    { id: 3, from: 'Colombo (CMB)', to: 'Sydney (SYD)', date: 'Dec 10 - Jan 15', type: 'Round-trip' },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <PlaneTakeoff className="h-5 w-5 text-blue-600" />
          Your Recent Searches
        </h2>

        <div className="flex overflow-x-auto pb-4 gap-4 hide-scrollbar">
          {recentSearches.map((search) => (
            <Link 
              href="/search" 
              key={search.id}
              className="min-w-[280px] bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex-shrink-0"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {search.type}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="font-bold text-slate-900 truncate">{search.from.split(' ')[0]}</div>
                <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <div className="font-bold text-slate-900 truncate">{search.to.split(' ')[0]}</div>
              </div>
              <div className="text-sm text-slate-500">{search.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
