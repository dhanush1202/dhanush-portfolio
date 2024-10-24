import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Home(props) {
  return (
    // bg-[#4a596f]
    <div className="w-full h-screen text-gray-900">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="py-2 about">Hey, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold nameplate">
          Dhanush Gummadavalli
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#627254] nameplate">
          Student
        </h2>
        <p className=" text-gray-900 py-4 max-w-[700px] abtmatter">
          I have recently completed my Bachelor's degree in Information
          Technology from VNRVJIET. I currently work as a Software Engineer at
          Aspireup, specializing in the MERN stack and AWS. I am also open to
          freelancing, offering services in designing and developing web
          applications.
        </p>
        <div>
          <button
            className="abtmatter text-black group font-[550] text-xl border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-[#647254] hover:border-[#647254] hover:rounded-lg  duration-500"
            onClick={props.clickhandle}
          >
            View More!
            <HiArrowRight className="ml-2 group-hover:rotate-90 duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
