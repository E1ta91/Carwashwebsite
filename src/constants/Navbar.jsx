import { hd, logos } from "../assets";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';

import { useNavigate } from "react-router-dom";
import Drawer from "../components/drawer";
import DrawNav from "../components/drawnav";
import React from "react";
import DrawerFooter from "../components/drawerfooter";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-screen max-w-screen-lg z-40 bg-zinc-800 bg-opacity-80 shadow-md rounded-b-lg">
      <div className="hidden lg:flex w-full h-16 items-center justify-between p-4 rounded-b-lg">
        <nav className="text-white flex items-center justify-center text-lg gap-6">
          <a href="#" onClick={() => navigate('/')} className="hover:underline">Home</a>
          <a href="#" onClick={() => navigate('signup')} className="hover:underline">Sign Up</a>
          <a href="#" onClick={() => navigate('signin')} className="hover:underline">Sign In</a>
        </nav>
        <img className="h-16 mx-4 cursor-pointer" src={logos} alt="logo" />
        <div className="flex items-center space-x-2">
          <img className="w-8 h-8" src={ins} alt="Instagram" />
          <img className="w-16 h-16" src={you} alt="YouTube" />
          <img className="w-8 h-8" src={face} alt="Facebook" />
        </div>
      </div>

      <div className="flex lg:hidden justify-between items-center pt-3 ml-4 w-11/12 fixed bg-zinc-900 z-40">
        <div onClick={() => handleClickScroll("home", 100)}>
          <img
            className="lg:hidden rounded-3xl m-2"
            src={logos}
            alt=""
            width="80"
          />
        </div>

        {/** onClick to open nav drawer */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12" onClick={() => setIsOpen(isOpen)} >
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 
          .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"
          />
        </svg>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawNav path={"signup"} label={"Sign Up"} setIsOpen={setIsOpen} />
          <DrawNav path={"signin"} label={"Sign In"} setIsOpen={setIsOpen} />
          <DrawerFooter />
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
