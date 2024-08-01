import { sign } from '../assets';
import React, { useState } from 'react';
import { HomeIcon } from '@heroicons/react/16/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibity = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className="flex flex-col justify-center items-center h-screen w-full md:w-3/5 p-6 md:p-10">
        <div className="pb-7 font-sans flex flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Joining Our Community?</h1>
          <p className="text-xl md:text-2xl">Sign Up Now</p>
        </div>

        <form className="w-full max-w-xs mx-auto">
          <div className="mb-4">
            <input
              type="name"
              id="firstname"
              placeholder="First name"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="name"
              id="lastname"
              placeholder="Last name"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
            />
          </div>

          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex justify-center items-center px-3 cursor-pointer" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
            </span>
          </div>

          <div className="mb-5 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex justify-center items-center px-3 cursor-pointer" onClick={toggleConfirmPasswordVisibity}>
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-2 bg-blue-600 text-white rounded-lg border border-white hover:bg-gray-500 transition duration-200"
          >
            Signup
          </button>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-600">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div>
            <h1 className='text-center'>
              Already have an account? <a href="#" onClick={() => navigate('/signin')} className='text-blue-600 font-semibold'>Signin</a>
            </h1>
          </div>
        </form>

        <div className="text-blue-600 font-semibold mt-4">
          <a href='' onClick={() => navigate('/')}>Back to Home</a>
        </div>
      </div>

      <div className="relative w-full md:w-2/5 h-64 md:h-screen">
        <img className="h-full w-full object-cover" src={sign} alt="image" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
};

export default Signup;
