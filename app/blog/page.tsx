import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Post One', excerpt: 'This is a brief summary of post one.' },
    { id: 2, title: 'Post Two', excerpt: 'This is a brief summary of post two.' },
    { id: 3, title: 'Post Three', excerpt: 'This is a brief summary of post three.' },
  ];

  return (
    <div>
      <Navbar />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center mt-10'>Blog</h1>
        <p className='text-center mt-4'>This is the blog page.</p>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <div key={post.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{post.title}</div>
                <p className='text-gray-700 text-base'>{post.excerpt}</p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <Link href={`/post/${post.id}`} className='inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
