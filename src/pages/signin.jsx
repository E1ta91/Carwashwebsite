import React, { useState } from 'react';
import { google, login } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Loader from "../components/loader"
import { toast } from 'react-toastify';
import { apiLogIn } from '../services/auth';
import { useForm } from 'react-hook-form';

const Signin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { register, handleSubmit, formState: { errors } } = useForm({reValidateMode: "onBlur", mode: "all"});

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    
    try {
      const res = await apiLogIn({
        email: data.email,
        password: data.password,
      });
      console.log(res.data);
      
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/select");
      }, 500 )
      
     
    } catch (error) {
      console.log(error)
      toast.error("An error occured!")
    } finally {
      setIsSubmitting(false)
    }
  };
  
  return (
    <div className='flex flex-col md:flex-row w-screen'>

      <div className="flex flex-col justify-center items-center h-screen w-screen lg:w-3/5 p-6 ">
        <div className="pb-7 font-sans text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Where did you go?</h1>
          <p className="text-xl md:text-2xl">Let's get you back in</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs mx-auto">
          <div className="mb-4">
            <input
              type="text"
              id="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("email", { required: "Email is required" })}
            />
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            />
             {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <span
              className="absolute inset-y-0 right-0 flex justify-center items-center px-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />

            </span>
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-2 bg-blue-600 text-white rounded-lg border border-white hover:bg-gray-500 transition duration-200 flex justify-center items-center"
            
          >
              {isSubmitting?  <Loader /> :
               "Sign In"}
          </button>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-600">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div>
            <h1 className='text-center'>
              Don't have an account yet? <a href="#" onClick={() => navigate('/')} className='text-blue-600 font-semibold'>Sign up</a>
            </h1>
          </div>
        </form>

        <div onClick={() => navigate('/')} className="text-blue-600 font-semibold mt-4">
          <a href=''>Back to Home</a>
        </div>
      </div>

      <div className="relative w-2/5 hidden lg:block  h-64 md:h-screen">
        <img className="h-full w-full object-cover" src={login} alt="image" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Signin;
