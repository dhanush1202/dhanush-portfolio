import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Home() {
  return (
    // bg-[#4a596f]
    <div className="w-full h-screen ">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hey, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#cbcbcb]">
          Dhanush Gummadavalli
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#f19191]">
          Student
        </h2>
        <p className=" text-slate-300 py-4 max-w-[700px]">
          A 4th year IT student from VNRVJIET college, I am specialized in React
          JS and python. Im open for freelancing (designing and developing) web
          applications.
        </p>
        <div>
          <button className=" text-white group text-xl border-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f19191] hover:border-[#f19191] hover:rounded-lg  duration-500">
            view resume
            <HiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
