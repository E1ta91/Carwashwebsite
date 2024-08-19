import { hd, logos } from "../assets";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';
import { useNavigate } from "react-router-dom";
import Drawer from "../components/drawer";
import DrawNav from "../components/drawnav";

import DrawerFooter from "../components/drawerfooter";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  return (
    <header className="flex shadow-md md:shadow-none   ">

      <div className="hidden lg:flex w-11/12 mt-5 items-center justify-evenly   z-40 bg-zinc-800  mb-5 rounded-xl fixed ml-14">
        <nav className="text-white flex text-lg gap-16">
          <a href="#" onClick={() => navigate('/')} className="hover:underline">Home</a>
          <a href="#" onClick={() => navigate('signup')} className="hover:underline">Sign Up</a>
          <a href="#" onClick={() => navigate('signin')} className="hover:underline">Sign In</a>
        </nav>
        <img className="h-20 mx-4 pr-8 cursor-pointer" src={logos} alt="logo" />
        <div className="flex items-center space-x-5">
          <img className="w-8 h-8" src={ins} alt="Instagram" />
          <img className="w-16 h-16" src={you} alt="YouTube" />
          <img className="w-8 h-8" src={face} alt="Facebook" />
        </div>
      </div>

      <div className="flex lg:hidden justify-between items-center pt-3 ml-4 w-11/12 overflow-x-hidden bg-zinc-900 fixed z-40">
        <div >
          <img
            className="lg:hidden rounded-3xl m-2"
            src={logos}
            alt="logo"
            width="80"
          />
        </div>

        {/** onClick to open nav drawer */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-15" onClick={() => setIsOpen(!isOpen)} >
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 
          .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"
          />
        </svg>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawNav path={"/"} label={"Home"} setIsOpen={setIsOpen} />
          <DrawNav path={"signup"} label={"Sign Up"} setIsOpen={setIsOpen} />
          <DrawNav path={"signin"} label={"Sign In"} setIsOpen={setIsOpen} />
          <DrawerFooter />
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
