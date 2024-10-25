import React from "react";
import padmaja from "../assets/padmaja.png";
import acm from "../assets/acm.png";
import yts from "../assets/yts.png";
import bmi from "../assets/bmi.png";
import "../index.css";

export default function Work() {
  const Work = {
    "Padmaja palm groves": {
      image: padmaja,
      uri: "https://ppgroves.netlify.app/",
      buttonText: "Demo",
    },
    "ACM VNRVJIET": {
      image: acm,
      uri: "https://vnrvjiet.acm.org/",
      buttonText: "Demo",
    },
    "YouTube Summarizer": {
      image: yts,
      uri: "https://github.com/dhanush1202/youtube_transcript_summarizer",
      buttonText: "Code",
    },
    "BMI Calculator": {
      image: bmi,
      uri: "https://github.com/dhanush1202/bmi-calculator",
      buttonText: "Code",
    },
  };
  return (
    <div className="w-full min-h-screen  text-gray-900">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col group/whole justify-center w-full h-full">
        <div>
          <p className="font-bold text-4xl inline border-[#627254] border-b-4 duration-200 px-2 navvv uppercase">
            Projects
          </p>
          <p className="py-3 abtmatter">Here are some of my works</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:w-[900px] lg:mx-auto">
          {Object.keys(Work).map((key) => {
            return (
              <div
                style={{ backgroundImage: `url(${Work[key].image})` }}
                className="shadow-[#3b4354] border-[#3b4354] group hover:shadow-[#555555bb] rounded-lg flex justify-center items-center contentdiv"
              >
                <div className="opacity-0 group-hover:opacity-100 duration-[1s] flex flex-col items-center justify-center">
                  <span className="text-2xl px-4 font-bold text-gray-900">
                    {key}
                  </span>
                  <a
                    href={Work[key].uri}
                    target="_blank"
                    rel="noreferrer"
                    className="pt-8 "
                  >
                    <button className="px-3 py-1 text-center font-bold text-lg border-2 hover:bg-[#627254] border-gray-900 hover:border-[#627254] hover:rounded-lg text-gray-900 duration-300">
                      {Work[key].buttonText}
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
