import React from 'react';

const Newsletter = () => {
    return (
        <div className=' w-full py-16 text-white '>
            <div className='max-w-[1240px ] mx-auto grid grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2  m-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p className='m-2'><span className='font-bold text-fuchsia-500'>Sign up</span> to our newsletter and stay up to date.</p>
          <div className='my-4'> 
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input className='p-4 flex w-full rounded-md text-black m-2 ' type='email' placeholder='Enter Email.. ' />   
          <button className='bg-[#ca479e] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'  >
          Notify me 
        </button>
        </div>
        </div>
        </div>
       <p> </p> 
       <p className='m-2'> We care bout the protection of your data. Read our{' '}
            <span className='text-[#d85aae]'>Privacy Policy.</span></p> 
        </div>
        </div>
    );
}

export default Newsletter;
