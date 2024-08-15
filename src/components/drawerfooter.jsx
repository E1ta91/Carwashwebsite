import React from "react";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';

//yCoord is the y-coordinate for the component to enable scrolling to that component
export default function DrawerFooter() {
    return (
        <div className="p-4 max-w-sm mx-auto items-center pt-20">

            <div className="flex items-center space-x-3">
                <img className="w-9 h-9" src={ins} alt="Instagram" />
                <img className="w-20 h-20" src={you} alt="YouTube" /> {/* Larger size for YouTube */}
                <img className="w-9 h-9" src={face} alt="Facebook" />
            </div>
        </div>
    );
}