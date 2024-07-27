import Navbar from '@/components/Navbar';

const Post = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const post = {
    title: `Post ${id}`,
    content: `This is the detailed content of post ${id}. This page is a placeholder for the post content.`,
  };

  return (
    <div>
      <Navbar />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center mt-10'>{post.title}</h1>
        <p className='mt-4 text-center'>{post.content}</p>
      </main>
    </div>
  );
};

export default Post;
