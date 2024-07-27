import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center mt-10'>Welcome to My Website</h1>
        <p className='text-center mt-4'>This is simple NextJs Project to try out things with Google Analytics</p>
      </main>
    </div>
  );
}
