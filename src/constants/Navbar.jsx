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
    <header className="fixed top-0 left-0 w-screen z-40 bg-zinc-800 bg-opacity-80 shadow-md">

      <div className="hidden lg:flex w-screen h-20 items-center justify-between p-6 mb-5 rounded-xl">
        <nav className="text-white flex text-xl gap-9">
          <a href="#"><h1 onClick={() => navigate('/')}>Home</h1></a>
          <a href="#"><h1 onClick={() => navigate('signup')}>Sign Up</h1></a>
          <a href="#"><h1 onClick={() => navigate('signin')}>Sign In</h1></a>
        </nav>
        <img className="h-20 pr-9 cursor-pointer" src={logos} alt="logo" />
        <div className="flex items-center space-x-3">
          <img className="w-9 h-9" src={ins} alt="Instagram" />
          <img className="w-20 h-20" src={you} alt="YouTube" />
          <img className="w-9 h-9" src={face} alt="Facebook" />
        </div>
      </div>



      <div className="flex lg:hidden w-screen items-center justify-between fixed top-0 left-0 bg-zinc-900 z-40 p-3">
  <div onClick={() => navigate("/", 100)}>
    <img className="rounded-3xl" src={logos} alt="" width="70" />
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    onClick={() => setIsOpen(!isOpen)}
    className="h-12 w-6"
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
  <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
    <DrawNav path={"/"} label={"Home"} setIsOpen={setIsOpen} />
    <DrawNav path={"signup"} label={"Sign Up"} setIsOpen={setIsOpen} />
    <DrawNav path={"signin"} label={"Sign In"} setIsOpen={setIsOpen} />
    <DrawNav path={"select"} label={"Select"} setIsOpen={setIsOpen} />
    <DrawerFooter />
  </Drawer>
</div>

    </header>

  );
};

export default Navbar;
