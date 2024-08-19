import React from 'react'
import { useNavigate } from 'react-router-dom';



const DrawNav = ({ path, label,  setIsOpen }) => {
  const navigate= useNavigate();
  return (
    <div className="border border-[#0F6EDB] shadow rounded-md p-4 max-w-sm w-full mx-auto items-center cursor-pointer">
    <div className="flex space-x-4">
     
        <div className="h-4 rounded text-white w-3/4"
            onClick={() => { setIsOpen(false); navigate(path) }}
        >
            {label}
        </div>
    </div>
</div>
  )
}

export default DrawNav