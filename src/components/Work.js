import React from "react";
import padmaja from '../assets/padmaja.png';
import "../index.css";

export default function Work() {
  return (
    <div className="w-full md:h-screen group  text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold text-2xl inline border-pink-700 group-hover:border-b-4 duration-200 px-2 capitalize">
            works
          </p>
          <p className="py-3">here are some of my works</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:w-[800px] lg:mx-auto" >
          <div style={{backgroundImage: `url(${padmaja})`}} className="shadow-lg group hover:shadow-[#555555bb] rounded-lg flex justify-center items-center contentdiv">
            <div className="opacity-0 hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                Padmaja palm groves
              </span>
              <a href="https://padmajapalm.netlify.app/" target="_blank" className="pt-8 ">
                <button className="px-3 py-4 m-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div style={{backgroundImage: `url(${padmaja})`}} className="shadow-lg group hover:shadow-[#555555bb] duration-500 rounded-lg flex justify-center  contentdiv">
            <div className="opacity-0 hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                Padmaja palm groves
              </span>
              <a href="" className="pt-8 ">
                <button className="px-3 py-4 m-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
            </div>
          </div><div style={{backgroundImage: `url(${padmaja})`}} className="shadow-lg group hover:shadow-[#555555bb] duration-500 rounded-lg flex justify-center contentdiv">
            <div className="opacity-0 hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                Padmaja palm groves
              </span>
              <a href="" className="pt-8 ">
                <button className="px-3 py-4 m-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
            </div>
          </div><div style={{backgroundImage: `url(${padmaja})`}} className="shadow-lg group hover:shadow-[#555555bb] duration-500 rounded-lg flex justify-center  contentdiv">
            <div className="opacity-0 hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                Padmaja palm groves
              </span>
              <a href="" className="pt-8 ">
                <button className="px-3 py-4 m-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
