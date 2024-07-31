import React from 'react'
import { services, wash } from '../assets'
import { Navigate,  useNavigate } from 'react-router-dom'

const Select = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 w-screen h-screen'>

            <div className='flex justify-center items-center pt-48 gap-40'>

                <a href='' className='bg-white shadow-2xl shadow-black w-[25vw] h-[40vh] rounded-md flex flex-col justify-center items-center transform transition-transform hover:scale-105 ' onClick={() => navigate('/select/wash')} >
                    <img src={wash} alt="image" className='w-72 ' />
                    <h1 className='pt-6 font-semibold text-blue-600 text-xl'>Car Wash</h1>
                </a>

                <a href='' className='bg-white shadow-2xl shadow-black w-[25vw] h-[40vh] rounded-md flex flex-col justify-center items-center transform transition-transform hover:scale-105' onClick={() => navigate('/select/services')}>
                    <img src={services} alt="image" className='w-72 ' />
                    <h1 className='pt-6 font-semibold text-blue-600 text-xl'>Car Services</h1>
                </a>

            </div>


        </div>
    )
}

export default Select