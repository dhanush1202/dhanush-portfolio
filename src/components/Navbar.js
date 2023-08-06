import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
export default function Navbar(props) {
  const { activeSection } = props;
  const [nav, setnav] = useState(false);
  const navclick = () => {
    setnav(!nav);
  };
  let see = "rgb(51, 65, 85)";
  return (
    <div
      className="fixed w-full h-[70px] flex justify-between items-center px-4  text-[#ffffffc6] z-50 navvv"
      style={{ background: see }}
    >
      <div className="m-auto">
        <ul className="hidden md:flex text-xl">
          <li
            onClick={props.clickhandle3}
            className={`uppercase hover:text-blue-400 ${activeSection === "home" ? " text-blue-400" : ""}`}
          >
            home
          </li>
          <li
            onClick={props.clickhandle}
            className={`uppercase hover:text-blue-400 ${activeSection === "about" ? "text-blue-400" : ""}`}
          >
            About
          </li>
          <li
            onClick={props.clickhandle2}
            className={`uppercase hover:text-blue-400 ${
              activeSection === "skills" ? "text-blue-400" : ""
            }`}
          >
            Skills
          </li>
          <li
            onClick={props.clickhandle4}
            className={`uppercase hover:text-blue-400 ${
              activeSection === "projects" ? "text-blue-400" : ""
            }`}
          >
            Projects
          </li>
          <li
            onClick={props.clickhandle5}
            className={`uppercase hover:text-blue-400 ${
              activeSection === "contact" ? "text-blue-400" : ""
            }`}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="mobile md:hidden z-10 " onClick={navclick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          nav
            ? "mobile absolute list-none top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-3 text-3xl" onClick={props.clickhandle3}>
          <div onClick={navclick}>home</div>
        </li>
        <li className="py-3 text-3xl" onClick={props.clickhandle}>
          <div onClick={navclick}>About</div>
        </li>
        <li className="py-3 text-3xl" onClick={props.clickhandle2}>
          <div onClick={navclick}>Skills</div>
        </li>
        <li className="py-3 text-3xl" onClick={props.clickhandle4}>
          <div onClick={navclick}>Projects</div>
        </li>
        <li className="py-3 text-3xl" onClick={props.clickhandle5}>
          <div onClick={navclick}>Contact</div>
        </li>
      </ul>
      <div className="hidden lg:flex fixed top-[70%] flex-col ">
        <ul>
          <li className="flex items-center py-1 w-[130px] h-[50px] justify-between bg-blue-600 ml-[-100px] hover:ml-[-20px] duration-300">
            <a
              href="https://www.linkedin.com/in/dhanushg12/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full h-full justify-between"
            >
              linkedIn
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li className="flex items-center py-1 w-[120px] h-[50px] justify-between bg-slate-600 ml-[-90px] hover:ml-[-20px] duration-300">
            <a
              href="https://github.com/dhanush1202"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full h-full justify-between"
            >
              github
              <FaGithub size={20} />
            </a>
          </li>
          <li className="flex items-center py-1 w-[120px] h-[50px] justify-between bg-red-700 ml-[-90px] hover:ml-[-20px] duration-300">
            <a
              href="http://discordapp.com/users/920520844176932925"
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full h-full justify-between"
            >
              Discord
              <BsDiscord size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
