import React from 'react'
import { services, wash } from '../assets'

const Select = () => {
    return (
        <div className='bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 w-screen h-screen'>

            <div className='flex justify-center items-center pt-48 gap-40'>

                <div className='bg-white shadow-2xl shadow-black w-[25vw] h-[40vh] rounded-md flex flex-col justify-center items-center transform transition-transform hover:scale-105 '>
                    <img src={wash} alt="image" className='w-72 ' />
                    <h1 className='pt-6 font-semibold text-blue-600 text-xl'>Car Wash</h1>
                </div>

                <div className='bg-white shadow-2xl shadow-black w-[25vw] h-[40vh] rounded-md flex flex-col justify-center items-center transform transition-transform hover:scale-105 '>
                    <img src={services} alt="image" className='w-72 ' />
                    <h1 className='pt-6 font-semibold text-blue-600 text-xl'>Car Services</h1>
                </div>

            </div>


        </div>
    )
}

export default Select