import React from 'react';

export default function Contact() {
 

  return (
    <div name="contact" className='w-full h-screen text-gray-300 flex justify-center items-center p-4'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col group justify-center w-full h-full'>
      <div className='py-8'>
          <p className="font-bold text-2xl inline border-pink-700 group-hover:border-b-4 duration-200 px-2 capitalize">
            Contact
          </p>
        </div>
        <div className='w-full flex items-center justify-center mx-auto'>

        <form   action='https://getform.io/f/5a410c9a-acb0-4147-b651-a45e500b392b' method='POST' className='flex flex-col max-w-[600px] w-full group'>
        
        <input type="text" placeholder='Name' className='p-2  bg-[#ccd6f6] text-gray-800 rounded-md' name='name' required />
        <input type="email" placeholder='Email' className='my-4 p-2 bg-[#ccd6f6] rounded-md text-gray-800' name='email' required />
        <textarea  className='bg-[#ccd6f6] p-2 text-gray-800 rounded-md' name='message' placeholder='Message' rows="10" required></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-2 px-4 my-2 mx-auto rounded-lg text-xl'>Submit</button>
        </form>
        </div>

    </div>
    
    </div>
  )
}
