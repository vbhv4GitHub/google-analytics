import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center mt-10'>Contact Us</h1>
        <p className='text-center mt-4'>This is the contact page.</p>
        <div className='mt-10 max-w-md mx-auto'>
          <form id='contact-form' className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                type='text'
                placeholder='Your name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='email'
                placeholder='Your email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='subject'>
                Subject
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='subject'
                type='text'
                placeholder='Subject'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='message'
                placeholder='Your message'
                rows={5}
              ></textarea>
            </div>
            <div className='flex items-center justify-between'>
              <button
                id='contact-form-cta'
                type='button'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
