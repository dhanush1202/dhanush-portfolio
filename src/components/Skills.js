import React from 'react'
import android from "../assets/android.png";
import bs from "../assets/burp suite.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";

export default function Skills() {
  return (
    <div className='w-full h-screen  text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex group flex-col justify-center w-full h-full'>
            <div>
                <p className='font-bold text-2xl inline border-pink-700 group-hover:border-b-4 duration-200 px-2'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-4 sm:grid-cols-6 gap-4 text-center'>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={html} alt="html icon" />
                    <p className='my-2'>HTML</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={css} alt="html icon" />
                    <p className='my-2'>CSS</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={javascript} alt="html icon" />
                    <p className='my-2'>JAVASCRIPT</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={react} alt="html icon" />
                    <p className='my-2'>REACT JS</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={sql} alt="html icon" />
                    <p className='my-2'>SQL</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={github} alt="html icon" />
                    <p className='my-2'>GITHUB</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={c} alt="html icon" />
                    <p className='my-2'>C</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={cpp} alt="html icon" />
                    <p className='my-2'>C++</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={python} alt="html icon" />
                    <p className='my-2'>PYTHON</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={java} alt="html icon" />
                    <p className='my-2'>JAVA</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={android} alt="html icon" />
                    <p className='my-2'>ANDROID STUDIOS</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={firebase} alt="html icon" />
                    <p className='my-2'>FIREBASE</p>
                </div>
                <div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={tailwind} alt="html icon" />
                    <p className='my-2'>Tailwind CSS</p>
                </div><div className=' shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg'>
                    <img className='w-10 sm:w-20 mx-auto py-2' src={bs} alt="html icon" />
                    <p className='my-2'>Burp Suite</p>
                </div>
            </div>
            <br />
        </div>
    </div>
  )
}
