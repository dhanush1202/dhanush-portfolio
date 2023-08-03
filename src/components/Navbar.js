import React from "react";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
export default function Navbar(props) {
  // const ref = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };
  const [nav, setnav] = useState(false);
  const navclick = () => {
    setnav(!nav);
  };
  let see = "rgb(51, 65, 85, 0.9)";
  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4  text-[#ffffffc6] z-50" style={{background: see}}>
      <div className="m-auto">
        <ul className="hidden md:flex text-lg">
          
          <li onClick={props.clickhandle3} className="uppercase">home</li>
          <li onClick={props.clickhandle} className="uppercase">About</li>
          <li onClick={props.clickhandle2} className="uppercase">Skills</li>
          <li onClick={props.clickhandle4} className="uppercase">Projects</li>
          <li onClick={props.clickhandle5} className="uppercase">Contact</li>
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
        <li className="py-3 text-3xl" onClick={props.clickhandle3}>home</li>
        <li className="py-3 text-3xl" onClick={props.clickhandle}>About</li>
        <li className="py-3 text-3xl" onClick={props.clickhandle2}>Skills</li> 
        <li className="py-3 text-3xl" onClick={props.clickhandle4}>Projects</li>
        <li className="py-3 text-3xl" onClick={props.clickhandle5}>Contact</li>
      </ul>
      <div className="hidden lg:flex fixed top-[70%] flex-col ">
        <ul>
          
          <li className="flex items-center py-1 w-[130px] h-[50px] justify-between bg-blue-600 ml-[-100px] hover:ml-[-20px] duration-300">
            <a href="https://www.linkedin.com/in/dhanushg12/" target="_blank" rel="noreferrer" className="flex items-center w-full h-full justify-between">
               linkedIn
              <FaLinkedinIn size={20}/>
            </a>
          </li>
          <li className="flex items-center py-1 w-[120px] h-[50px] justify-between bg-slate-600 ml-[-90px] hover:ml-[-20px] duration-300" >
            <a href="https://github.com/dhanush1202" target="_blank" rel="noreferrer"  className="flex items-center w-full h-full justify-between">
              github
              <FaGithub size={20}/> 
            </a>
          </li>
          <li className="flex items-center py-1 w-[120px] h-[50px] justify-between bg-red-700 ml-[-90px] hover:ml-[-20px] duration-300">
            <a href="http://discordapp.com/users/920520844176932925" target="_blank" rel="noreferrer"  className="flex items-center w-full h-full justify-between">
               Discord
              <BsDiscord size={20}/>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
