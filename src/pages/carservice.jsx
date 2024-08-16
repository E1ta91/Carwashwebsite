import React, { useState } from 'react';
import { car5, car1, car2, car3, car4, logos } from '../assets/index'
import { SearchIcon } from 'lucide-react';
import './flipCards.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../constants/Navbar'

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
    <div className='flex flex-col gap-10 '>
        
            <div className='flex justify-center gap-3 items-center relative pt-36'>
            
                <button className='px-5 py-3 bg-white font-semibold text-black rounded-lg border-2 hover:bg-blue-600 focus:outline-none'  >ALL</button>
                <div className='relative w-[40vw]'>
                    <input
                        type="text"
                        id='search'
                        name='search'
                        placeholder='Search by your location'
                        autoComplete='search'
                        value={searchTerm}
                        onChange={handleSearch}
                        className='w-full h-[7vh] rounded-lg border outline-none border-gray-400 pl-10'
                    />
                    <SearchIcon className='absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-600' />
                </div>
            </div>

            <div className='grid grid-cols-3 gap-7 '>
                {filteredServices.map(service => (
                    <div key={service.id} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={service.image} alt="img" className='w-[400px] h-[400px]' />
                            </div>
                            <div className="flip-card-back flex justify-center flex-col gap-3 items-center">
                                <h1 className='text-xl'>{service.name}</h1>
                                <p>Location: {service.location}</p>
                                <p>Open hours: {service.hours}</p>
                                <button onClick={() => navigate(service.route)}   className="p-2 my-5 border-2 border-gray-600 rounded-xl hover:bg-blue-600 hover:text-white hover:border-white transition duration-300"
                   >Book</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Carservice