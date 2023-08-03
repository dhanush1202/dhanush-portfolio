import React from "react";
import padmaja from "../assets/padmaja.png";
import acm from "../assets/acm.png";
import yts from "../assets/yts.png";
import bmi from "../assets/bmi.png";
import "../index.css";

export default function Work() {
  return (
    <div className="w-full min-h-screen  text-gray-300">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col group/whole justify-center w-full h-full">
        <div>
          <p className="font-bold text-2xl inline border-pink-700 group-hover/whole:border-b-4 duration-200 px-2 capitalize">
            Projects
          </p>
          <p className="py-3">here are some of my works</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:w-[800px] lg:mx-auto">
          <div
            style={{ backgroundImage: `url(${padmaja})` }}
            className="shadow-lg group hover:shadow-[#555555bb] rounded-lg flex justify-center items-center contentdiv"
          >
            <div className="opacity-0 group-hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                Padmaja palm groves
              </span>
              <a
                href="https://padmajapalm.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="pt-8 "
              >
                <button className="px-4 py-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${acm})` }}
            className="shadow-lg group hover:shadow-[#555555bb] duration-500 rounded-lg flex justify-center  contentdiv"
          >
            <div className="opacity-0 group-hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                ACM VNRVJIET
              </span>
              <a href="https://github.com/dhanush1202/acm" target="_blank" rel="noreferrer" className="pt-8 ">
                <button className="px-4 py-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${yts})` }}
            className="shadow-lg group hover:shadow-[#555555bb] duration-500 rounded-lg flex justify-center contentdiv"
          >
            <div className="opacity-0 group-hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                YouTube Summarizer
              </span>
              <a href="https://github.com/dhanush1202/youtube_transcript_summarizer" target="_blank" rel="noreferrer" className="pt-8 ">
                <button className="px-4 py-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bmi})` }}
            className="shadow-lg group hover:shadow-[#555555bb] duration-500 rounded-lg flex justify-center  contentdiv"
          >
            <div className="opacity-0 group-hover:opacity-70 duration-500 flex flex-col items-center justify-center">
              <span className="text-2xl px-4 font-bold text-white">
                BMI Calculator
              </span>
              <a href="https://github.com/dhanush1202/bmi-calculator" target="_blank" rel="noreferrer" className="pt-8 ">
                <button className="px-4 py-2 rounded-lg bg-slate-400 text-center text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
