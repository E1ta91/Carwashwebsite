import React, { useState } from 'react';
import { car5, car1, car2, car3, car4, logos } from '../assets/index'
import { SearchIcon } from 'lucide-react';
import './flipCards.css';
import { useNavigate } from 'react-router-dom';
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';
import Drawer from "../components/drawer";
import DrawNav from "../components/drawnav";

import DrawerFooter from "../components/drawerfooter";




const carWashServices = [
  {
      id: 1,
      name: 'SmoothRide Mechanic',
      location: 'Abokobi',
      hours: '8AM - 6PM',
      image: car5,
      route: '/smooth'
  },
  {
      id: 2,
      name: 'Automend Solutions',
      location: 'Adenta',
      hours: '8AM - 6PM',
      image: car1,
      route: '/auto'
  },
  {
      id: 3,
      name: 'Speedy Fix Auto Repairs',
      location: 'lapaz',
      hours: '8AM - 6PM',
      image: car2,
      route: '/speedyfix'
  },
  {
      id: 4,
      name: 'Revive Ride Mechanics',
      location: 'lapaz',
      hours: '8AM - 6PM',
      image: car3,
      route: '/reviveride'
  },
  {
      id: 5,
      name: 'RoadReady Auto Services ',
      location: 'Dansoman',
      hours: '8AM - 6PM',
      image: car4,
      route: '/roadready'
  },
 
];

const Carservice = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleShowAll = () => {
        setSearchTerm('');
      };


    const filteredServices = carWashServices.filter(service =>
        service.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
        <header className="flex shadow-md md:shadow-none   ">

<div className="hidden lg:flex w-11/12 mt-5 items-center justify-evenly   z-40 bg-zinc-800  mb-5 rounded-xl fixed ml-14">
  <nav className="text-white flex text-lg gap-16">

  <button onClick={() => handleNavigation('/')} className="hover:underline">Home</button>
    <button onClick={() => handleNavigation('/wash')} className="hover:underline">Car Wash</button>
  </nav>
  <img className="h-20 mx-4 pr-8 cursor-pointer" src={logos} alt="logo" />
  <div className="flex items-center space-x-5">
    <img className="w-8 h-8" src={ins} alt="Instagram" />
    <img className="w-16 h-16" src={you} alt="YouTube" />
    <img className="w-8 h-8" src={face} alt="Facebook" />
  </div>
</div>

            {/* {for mobile screen} */}
<div className="flex lg:hidden justify-between items-center pt-3 ml-4 w-11/12 overflow-x-hidden bg-zinc-900 fixed rounded-b-lg z-40">
  <div >
    <img
      className="lg:hidden rounded-3xl m-2"
      src={logos}
      alt="logo"
      width="80"
    />
  </div>

  {/** onClick to open nav drawer */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-15" onClick={() => setIsOpen(!isOpen)} >
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 
    .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"
    />
  </svg>

  <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
    <DrawNav path={"/"} label={"Home"} setIsOpen={setIsOpen} />
    <DrawNav path={"/wash"} label={"Car Wash"} setIsOpen={setIsOpen} />
    <DrawerFooter />
  </Drawer>
</div>
</header>
         <div className='mx-8 md:mx-24 lg:mx-28 xl:mx-32  '>
        <div className='flex justify-center items-center flex-col gap-8'>

        <div className='flex gap-3 justify-center 
        items-center relative pt-36 '>
            
            <button className='px-5 py-3 bg-white font-semibold text-black rounded-lg border-2 hover:bg-blue-600 focus:outline-none'  onClick={handleShowAll}  >ALL</button>
            <div className='relative w-full max-w-lg'>
                <input
                    type="text"
                    id='search'
                    name='search'
                    placeholder='Search by your location'
                    autoComplete='search'
                    value={searchTerm}
                    onChange={handleSearch}
                    className='w-[55vw] md:w-[35vw] lg:w-[35vw]  h-12 rounded-lg border outline-none border-gray-400 pl-10'
                />
                <SearchIcon className='absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-600' />
            </div>
        </div>

        <div className='px-8 sm:px-10 mr-10  sm:mr-16 mb-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-evenly gap-20">
            {filteredServices.map(service => (
                <div key={service.id} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={service.image} alt="img" className='w-[400px] h-[400px]' />
                        </div>
                        <div className="flip-card-back flex justify-center flex-col gap-3 items-center">
                            <h1 className='text-xl'>{service.name}</h1>
                            <p className='text-lg'>Location: {service.location}</p>
                            <p className='text-lg'>Open hours: {service.hours}</p>
                            <button onClick={() => navigate(service.route)}   className="p-2 my-5 border-2 border-gray-600 rounded-xl hover:bg-blue-600 hover:text-white hover:border-white transition duration-300"
               >Book</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
        
           

           
        </div>
    </div>
   
  )
}

export default Carservice