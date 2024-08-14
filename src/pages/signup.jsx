import { sign } from '../assets';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { apiSignUp } from '../services/auth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Loader from '../components/loader';


const Signup = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({reValidateMode: "onBlur", mode: "all"});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibity = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
      confirmPassword: data.password
    };

    
    try {
      const res = await apiSignUp(payload);
      console.log(res.data);

      toast.success(res.data.message);
      navigate("/signin")

    } catch (error) {
      console.log(error)
      toast.error("An error occured!")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className="flex flex-col justify-center items-center h-screen w-full md:w-3/5 p-6 md:p-10">
        <div className="pb-7 font-sans flex flex-col gap-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Joining Our Community?</h1>
          <p className="text-xl md:text-2xl">Sign Up Now</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs mx-auto">
          <div className="mb-4">
            <input
              type="name"
              id='firstName'
              placeholder="First name"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("firstName", {required: "First name is required"})}
            />
            {errors.firstName && <p className='text-red-500'>
            {errors.firstName.message}  </p>}
          </div>

          <div className="mb-4">
            <input
              type="name"
              id='lastName'
              placeholder="Last name"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("lastName", {required: "Last name is required"})}
            />
             {errors.lastName && <p className='text-red-500'>
              {errors.lastName.message}  </p>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              id='email'
              placeholder="Email address"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("email", {required: "Email is required"})}
            />
             {errors.email && <p className='text-red-500'>
              {errors.email.message}  </p>}
          </div>

          <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id='password'
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("password", {required: "Password is required", minLength: {value: 6, message: 'Password must be at least 6 characters'}})}
            />
            <span className="absolute inset-y-0 right-0 flex justify-center items-center px-3 pb-1  cursor-pointer" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
            </span>
            {errors.password && (<p className="text-red-500 ">{errors.password.message}</p>)}
          </div>

          <div className="mb-5 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id='confirmPassword'
              placeholder="Confirm password"
              className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
              {...register("confirmPassword", {required: "Password is required", minLength: {value: 6, message: 'Password must be at least 6 characters'}})}
            />
            <span className="absolute pb-1 inset-y-0 right-0 flex justify-center items-center px-3 cursor-pointer" onClick={toggleConfirmPasswordVisibity}>
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-slate-500 w-5" />
            </span>
            {errors.confirmPassword && (<p className="text-red-500 ">{errors.confirmPassword.message}</p>)}
          </div>

          <button
            type="submit"
            className="w-full h-10 mt-2 bg-blue-600 text-white rounded-lg border border-white hover:bg-gray-500 transition duration-200"
          >

            {isSubmitting? <Loader/> : 'Sign Up' }
          </button>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-600">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div>
            <h1 className='text-center'>
              Already have an account? <a href="#" onClick={() => navigate('/signin')} className='text-blue-600 font-semibold'>Sign In</a>
            </h1>
          </div>
        </form>

        <div className="text-blue-600 font-semibold mt-4">
          <a href='' onClick={() => navigate('/')}>Back to Home</a>
        </div>
      </div>

      <div className="relative hidden lg:block w-full md:w-2/5 h-64 md:h-screen">
        <img className="h-full w-full object-cover" src={sign} alt="image" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </div>
  );
};

export default Signup;
