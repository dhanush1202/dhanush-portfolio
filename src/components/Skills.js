import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import Node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import aws from "../assets/aws.png";
import flutter from "../assets/flutter.png";
import dart from "../assets/dart.png";

export default function Skills() {
  const Skills = {
    "React js": react,
    "Express js": express,
    "Node js": Node,
    "Mongo DB": mongodb,
    HTML: html,
    CSS: css,
    Javascript: javascript,
    "Tailwind CSS": tailwind,
    AWS: aws,
    Flutter: flutter,
    Dart: dart,
  };
  return (
    <div className="w-full max-h-fit  text-gray-900 ">
      <div className="max-w-[1000px] mx-auto p-4 flex group flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold text-4xl inline border-[#627254] group-hover:border-b-4 duration-200 px-2 navvv uppercase">
            Skills
          </p>
          <p className="py-4 abtmatter">
            These are the technologies I've worked with
          </p>
          <br />
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {Object.keys(Skills).map((key) => {
            return (
              <div className=" shadow-lg hover:shadow-[#555555bb] hover:scale-110 duration-500 rounded-lg">
                <img
                  className="w-10 aspect-square sm:w-20 mx-auto py-2"
                  src={Skills[key]}
                  alt="html icon"
                />
                <p className="my-2">{key}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
