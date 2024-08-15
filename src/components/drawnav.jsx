import React from 'react'
import { handleClickScroll } from './nav';


const DrawNav = ({ path, label,   setIsOpen }) => {
  return (
    <div className="border border-amber-500 shadow rounded-md p-4 max-w-sm w-full mx-auto items-center cursor-pointer">
    <div className="flex space-x-4">
     
        <div className="h-4 rounded w-3/4"
            onClick={() => { setIsOpen(false); handleClickScroll(path, 100) }}
        >
            {label}
        </div>
    </div>
</div>
  )
}

export default DrawNav