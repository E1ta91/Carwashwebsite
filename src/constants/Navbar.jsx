import { logos } from "../assets";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/drawer";
import DrawNav from "../components/drawnav";
import React from "react";
import DrawerFooter from "../components/drawerfooter";




const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header>
      <div className="hidden md:hidden lg:flex w-11/12 h-20 mt-5 items-center z-40 bg-zinc-800 p-6 mb-5 rounded-xl  sticky ml-14 justify-around space-x-5">

        <nav className="text-white flex text-xl gap-9">
          <a href=""><h1 onClick={() => navigate('/')}>Home</h1></a>
          <a href=""> <h1 onClick={() => navigate('signup')}>Sign Up</h1></a>
          <a href=""> <h1 onClick={() => navigate('signin')}>Sign In</h1></a>
        </nav>

    
        <img className="h-20 pr-9 cursor-pointer" src={logos} alt="logo" />

        <div className="flex items-center space-x-3">
          <img className="w-9 h-9" src={ins} alt="Instagram" />
          <img className="w-20 h-20" src={you} alt="YouTube" /> {/* Larger size for YouTube */}
          <img className="w-9 h-9" src={face} alt="Facebook" />
        </div>


      </div>


      <div className="flex lg:hidden justify-between items-center pt-3 ml-4 w-11/12 fixed bg-zinc-900 z-40">
        <div onClick={() => navigate("/", 100)}>
          <img
            className="lg:hidden rounded-3xl m-2"
            src={logos}
            alt=""
            width="60"
          />
        </div>

       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6" onClick={() => setIsOpen(!isOpen)} className="h-12">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 
          .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"
          />
        </svg>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <DrawNav path={"/"} label={"Home"}  setIsOpen={setIsOpen} />
        <DrawNav path={"signup"} label={"Sign Up"}  setIsOpen={setIsOpen} />
        <DrawNav path={"signin"} label={"Sign In"}  setIsOpen={setIsOpen} />
        <DrawerFooter/>
        </Drawer>
        
      </div>
    </header>

  );
};

export default Navbar;
