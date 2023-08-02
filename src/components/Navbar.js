import React from "react";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/c.png";
import { HiOutlineMail } from "react-icons/hi";
export default function Navbar() {
  const [nav, setnav] = useState(false);
  const navclick = () => {
    setnav(!nav);
  };
  let see = "rgb(51, 65, 85, 0.9)";
  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4  text-[#ffffffc6] z-50" style={{background: see}}>
      <div className="m-auto">
        <ul className="hidden md:flex">
          <li>home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Work Experience</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="mobile md:hidden z-10 " onClick={navclick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          nav
            ? "mobile absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-3 text-3xl">home</li>
        <li className="py-3 text-3xl">About</li>
        <li className="py-3 text-3xl">Skills</li> 
        <li className="py-3 text-3xl">Projects</li>
        <li className="py-3 text-3xl">Work Experience</li>
        <li className="py-3 text-3xl">Contact</li>
      </ul>
      <div className="hidden lg:flex fixed top-[70%] flex-col ">
        <ul>
          
          <li className="flex items-center py-1 w-[130px] h-[50px] justify-between bg-blue-600 ml-[-100px] hover:ml-[-20px] duration-300">
            <a href="/" className="flex items-center w-full h-full justify-between">
               linkedIn
              <FaLinkedinIn size={20}/>
            </a>
          </li>
          <li className="flex items-center py-1 w-[120px] h-[50px] justify-between bg-slate-600 ml-[-90px] hover:ml-[-20px] duration-300" >
            <a href="/" className="flex items-center w-full h-full justify-between">
              github
              <FaGithub size={20}/> 
            </a>
          </li>
          <li className="flex items-center py-1 w-[120px] h-[50px] justify-between bg-red-700 ml-[-90px] hover:ml-[-20px] duration-300">
            <a href="/" className="flex items-center w-full h-full justify-between">
               Mail 
              <HiOutlineMail size={20}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
