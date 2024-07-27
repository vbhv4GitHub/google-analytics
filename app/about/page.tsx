import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center mt-10'>About Us</h1>
        <p className='text-center mt-4'>This is the about page.</p>
      </main>
    </div>
  );
}
