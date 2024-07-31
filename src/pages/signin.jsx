import React, { useState } from 'react'
import { google, login } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className='flex'>
      <div className="flex flex-col justify-center items-center h-screen w-3/5 p-10">


        <div className="pb-7 font-sans text-center">
          <h1 className="text-4xl font-bold">Where did you go?</h1>
          <p className="text-2xl">Let's get you back in</p>
        </div>

        <form className="w-full max-w-xs mx-auto">

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
              type={showPassword? "text" : "password"}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
            />
          <span  className=" absolute inset-y-6 right-0  flex justify-center items-center px-3 cursor-pointer" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword? faEyeSlash : faEye} className=" mt-0 size-4 text-slate-500 pb-1 w-5 " />
          </span>
           
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-2 bg-blue-600 text-white rounded-lg border border-white hover:bg-gray-500 transition duration-200"
            onClick={() => navigate('/select')}
          >
            Signin
          </button>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-600">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className=''>
            <h1 className='text-center'>
              Don't have an account yet? <a href="#" onClick={() => navigate('/signup')} className='text-blue-600 font-semibold'>Sign up</a>
            </h1>
          </div>
        </form>

        <div onClick={() => navigate('/')} className="text-blue-600 font-semibold">
      <a href=''>Back to Home</a>
      </div>
      </div>

      <div className="relative w-2/5">
        <img className="h-screen w-full object-cover" src={login} alt="image" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>




    </div>
  )
}

export default Signin