import { useRef, useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
// import { useInView } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const initialanimi = { x: 0, y: "100vw", scale: 1 };
  // const rightanimi = {x:"100vh", y: "-100vw", scale: 0};
  const finaanimi = { x: 0, y: 0, scale: 1 };
  const trans = { duration: 1, type: "bounce" };
  // const animation = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= ref5.current.offsetTop - 10) {
        setActiveSection("contact");
      } else if (scrollY >= ref4.current.offsetTop - 10) {
        setActiveSection("projects");
      } else if (scrollY >= ref2.current.offsetTop) {
        setActiveSection("skills");
      } else if (scrollY >= ref.current.offsetTop) {
        setActiveSection("about");
      } else if (scrollY <= ref3.current.offsetHeight) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef(null);

  const clickhandle = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const ref2 = useRef(null);
  const clickhandle2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref3 = useRef(null);
  const clickhandle3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref4 = useRef(null);
  const clickhandle4 = () => {
    console.log(ref4.current);
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref5 = useRef(null);
  const clickhandle5 = () => {
    ref5.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar
        clickhandle={clickhandle}
        clickhandle2={clickhandle2}
        clickhandle3={clickhandle3}
        clickhandle4={clickhandle4}
        clickhandle5={clickhandle5}
        activeSection={activeSection}
      />
      <div>
       
        <div ref={ref3}>
          <motion.div
            initial={initialanimi}
            animate={finaanimi}
            transition={trans}
            style={{ overflowX: "hidden" }}
          >
            <Home clickhandle={clickhandle} />
          </motion.div>
        </div>
        <div ref={ref}>
          <About />
        </div>
        <div ref={ref2}>
          <div className="h-[70px]"></div>
          <Skills />
        </div>
        <div ref={ref4}>
          <div className="h-[100px]"></div>
          <Work />
        </div>
        <div ref={ref5}>
          <div className="h-[0px]"></div>
          <Contact />
        </div>
        <hr className=" border-black " />
        <div className=" p-4 flex justify-center w-full">
          <p>
        © 2022 - present Dhanush Gummadavalli. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
