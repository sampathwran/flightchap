import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';

async function getBlogPost(id: string) {
  try {
    const docRef = doc(db, 'blogs', id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() } as any;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  // Format date if available
  let dateString = '';
  if (post.createdAt) {
    const d = post.createdAt.toDate ? post.createdAt.toDate() : new Date(post.createdAt);
    dateString = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(d);
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center flex-wrap gap-4 mb-4">
            {post.category && (
              <span className="bg-[#673AB7]/10 text-[#673AB7] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            )}
            {post.readTime && (
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.readTime}
              </span>
            )}
            {dateString && (
              <span className="text-sm text-slate-500 font-medium">{dateString}</span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-md">
            <img 
              src={post.image} 
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          {post.content ? (
            <div 
              className="prose prose-lg max-w-none prose-slate prose-a:text-[#673AB7] prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-slate-500 italic text-center">No content available.</p>
          )}
        </div>
        
      </div>
    </div>
  );
}
