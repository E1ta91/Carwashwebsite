import { logos } from "../assets";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="hidden md:hidden lg:flex w-11/12 h-20 mt-5 items-center z-40 bg-zinc-800 p-6 mb-5 rounded-xl fixed ml-14 justify-evenly space-x-5">

      <div className="text-white flex text-xl gap-9">
        <a href=""><h1  onClick={() => navigate('/')}>Home</h1></a>
        <a href=""> <h1 onClick={() => navigate('signup')}>Sign Up</h1></a>
        <a href=""> <h1 onClick={() => navigate('signin')}>Sign In</h1></a>
       
       
      </div>

      <img className="w-28" src={logos} alt="logo" />

      <div className="flex items-center space-x-3">
  <img className="w-9 h-9" src={ins} alt="Instagram" />
  <img className="w-20 h-20" src={you} alt="YouTube" /> {/* Larger size for YouTube */}
  <img className="w-9 h-9" src={face} alt="Facebook" />
</div>

    
    </div>
  );
};

export default Navbar;
