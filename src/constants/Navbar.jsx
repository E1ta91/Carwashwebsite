import { logos } from "../assets";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-16 md:h-20 bg-zinc-800 p-4 md:p-6 mb-4 md:mb-5 rounded-xl fixed top-0 left-0 right-0 z-40 flex items-center justify-between md:justify-evenly space-x-4 md:space-x-5">
      
      <div className="flex items-center space-x-4 md:space-x-9 text-white text-sm md:text-xl">
        <h1 onClick={() => navigate('/')} className="cursor-pointer hover:text-gray-300">Home</h1>
        <h1 onClick={() => navigate('signup')} className="cursor-pointer hover:text-gray-300">Sign Up</h1>
        <h1 onClick={() => navigate('signin')} className="cursor-pointer hover:text-gray-300">Sign In</h1>
      </div>

      <img className="w-20 md:w-28" src={logos} alt="logo" />

      <div className="flex items-center space-x-3 md:space-x-4">
        <img className="w-6 h-6 md:w-9 md:h-9 cursor-pointer hover:opacity-80" src={ins} alt="Instagram" />
        <img className="w-12 h-12 md:w-20 md:h-20 cursor-pointer hover:opacity-80" src={you} alt="YouTube" /> {/* Larger size for YouTube */}
        <img className="w-6 h-6 md:w-9 md:h-9 cursor-pointer hover:opacity-80" src={face} alt="Facebook" />
      </div>
    </div>
  );
};

export default Navbar;
