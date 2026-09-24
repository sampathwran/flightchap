import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Link } from '@/i18n/routing';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export const revalidate = 60; // revalidate every minute

export default async function BlogPage() {
  const blogsRef = collection(db, 'blogs');
  const q = query(blogsRef, orderBy('createdAt', 'desc'));
  
  let blogs: any[] = [];
  try {
    const snapshot = await getDocs(q);
    blogs = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : null
      };
    });
  } catch (error) {
    console.error("Error fetching blogs", error);
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-[#673AB7] text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Blog & Guides</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Discover the best tips, destination guides, and travel hacks from our experts to make your next trip unforgettable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">No Articles Yet</h2>
            <p className="text-slate-500">Check back later for exciting travel content!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  {blog.image ? (
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                      <span className="text-slate-400">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#673AB7] shadow-sm">
                    {blog.category || 'Travel'}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime || '5 min read'}</span>
                    </div>
                    {blog.createdAt && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#673AB7] transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-500 line-clamp-3 mb-6 flex-grow">
                    {blog.metaDescription || 'Read our latest insights and tips for your journey...'}
                  </p>
                  
                  <Link href={/blog/ + blog.id} className="inline-flex items-center gap-2 text-[#673AB7] font-bold hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
