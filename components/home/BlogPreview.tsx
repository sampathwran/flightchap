'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useTranslations } from 'next-intl';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export default function BlogPreview() {
  const t = useTranslations('BlogPreview');

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const q = query(collection(db, 'blogs'));
        const querySnapshot = await getDocs(q);
        let fetchedPosts: BlogPost[] = [];
        const rawPosts: any[] = [];
        querySnapshot.forEach((doc) => {
          rawPosts.push({ id: doc.id, ...doc.data() });
        });

        // Sort by createdAt descending and limit to 3
        rawPosts.sort((a, b) => {
           const timeA = a.createdAt ? a.createdAt.toDate().getTime() : 0;
           const timeB = b.createdAt ? b.createdAt.toDate().getTime() : 0;
           return timeB - timeA;
        });

        rawPosts.slice(0, 3).forEach((data) => {
          // Generate a simple excerpt from HTML content
          let rawExcerpt = data.content ? data.content.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...' : 'Read this amazing travel guide...';
          if (data.metaDescription) {
            rawExcerpt = data.metaDescription; // Prefer meta description if available
          }

          let dateStr = "Recently";
          if (data.createdAt) {
             const d = data.createdAt.toDate();
             dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
          }

          fetchedPosts.push({
            id: data.id,
            title: data.title || 'Travel Guide',
            excerpt: rawExcerpt,
            date: dateStr,
            image: data.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
            category: data.category || 'Guides'
          });
        });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="animate-pulse h-8 w-48 bg-slate-200 rounded mb-10"></div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[1,2,3].map(i => <div key={i} className="h-72 bg-white rounded-xl animate-pulse"></div>)}
           </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null; // Don't show if no posts

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest Travel Tips</h2>
            <p className="text-slate-600">Read our latest articles and travel guides.</p>
          </div>
          <Link href="/blog" className="text-blue-600 font-semibold hover:underline hidden sm:flex items-center gap-1">
            Read all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden shrink-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.id}`} className="text-blue-600 font-medium hover:underline text-sm mt-auto inline-block">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
