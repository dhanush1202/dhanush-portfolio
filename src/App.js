import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
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
    ref3.current?.scrollIntoView({ behavior: "smooth"});
  };

  const ref4 = useRef(null);
  const clickhandle4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };

  const ref5 = useRef(null);
  const clickhandle5 = () => {
    ref5.current?.scrollIntoView({ behavior: "smooth"});
  };


  return (
    <div className="App">
      <Navbar clickhandle={clickhandle} clickhandle2={clickhandle2} clickhandle3={clickhandle3} clickhandle4={clickhandle4} clickhandle5={clickhandle5}/>
      <div ref={ref3}>

      <Home clickhandle={clickhandle}/>
      </div>
      <div ref={ref}>
        <About />
      </div>
      <div ref={ref2} >
        <div className="md:h-[70px]"></div>
      <Skills />
      </div>
      <div ref={ref4}>
        <div className="h-[70px]"></div>
      <Work />
      </div>
      <div ref={ref5}>
        
      <div className="h-[20px]"></div>
      <Contact />
      </div>
    </div>
  );
}

export default App;
