import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen  text-gray-900">
      <div className="flex flex-col justify-center group items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="font-bold navvv text-4xl inline border-[#627254] group-hover:border-b-4 duration-200 px-2">
              ABOUT
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] lg:max-w-[800px] w-full group grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right sm:text-3xl about">
            <p>
              HI! I'm Dhanush, Nice to see you here. Please take a look around.
            </p>
          </div>
          <div className="sm:text-left text-lg abtmatter">
            <p>
              I have a background in Quality Assurance Testing at T-Katal and
              Cybersecurity and Ethical Hacking from my internship at Supraja
              Technologies. My skills include React.js, Express.js, Node.js,
              MongoDB, HTML, CSS, Javascript, Tailwind CSS, AWS, Flutter, Dart, GitHub. I'm passionate
              about problem-solving and staying updated with the latest tech
              trends. Always eager to learn and connect with fellow IT
              professionals. Feel free to connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
