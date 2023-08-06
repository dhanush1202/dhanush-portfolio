import React from 'react'

function About() {
  
  return (
    <div name="about" className="w-full h-screen  text-gray-300">
      <div className="flex flex-col justify-center group items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="font-bold navvv text-4xl inline border-pink-700 group-hover:border-b-4 duration-200 px-2">
              ABOUT
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] lg:max-w-[800px] w-full group grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right font-bold sm:text-3xl about">
            <p>
             HI! I'm Dhanush, Nice to see you here. Please take a look around.
            </p>
          </div>
          <div className="sm:text-left text-lg abtmatter">
            <p>
              Throughout my academic career, I've developed a solid foundation
              in various aspects of information technology, such as software
              development, database management, networking, and cybersecurity. I
              have actively engaged in hands-on projects that involved the
              design and development of online applications, the analysis and
              optimization of databases, and the implementation of strong
              security measures to safeguard sensitive data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;