import React from 'react';

export default function Contact() {
 

  return (
    <div name="contact" className='w-full h-screen text-gray-300 flex justify-center items-center p-4'>
        <form   action='https://getform.io/f/5a410c9a-acb0-4147-b651-a45e500b392b' method='POST' className='flex flex-col max-w-[600px] w-full group'>
        <div className='py-4'>
          <p className="font-bold text-2xl inline border-pink-700 group-hover:border-b-4 duration-200 px-2 capitalize">
            Contact
          </p>
        </div>
        <input type="text" placeholder='Name' className='p-2  bg-[#ccd6f6] text-gray-800 rounded-md' name='name' required />
        <input type="email" placeholder='Email' className='my-4 p-2 bg-[#ccd6f6] rounded-md text-gray-800' name='email' required />
        <textarea  className='bg-[#ccd6f6] p-2 text-gray-800 rounded-md' name='message' placeholder='Message' rows="10" required></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-2 px-4 my-2 mx-auto rounded-lg text-xl'>Submit</button>
        </form>
    </div>
  )
}
