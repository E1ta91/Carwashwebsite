import React, { useState } from 'react';
import { flier1, flier2, flier3, flier4, flier5, flier6, flier7, logos } from '../assets';
import { SearchIcon } from 'lucide-react';
import './flipCards.css';
import { useNavigate } from 'react-router-dom';

const carWashServices = [
    {
        id: 1,
        name: 'Aquagleam Auto Wash',
        location: 'Adenta Commandos',
        hours: '8AM - 6PM',
        image: flier6,
        route: '/premium'
    },
    {
        id: 2,
        name: 'Sparkle Wave Car Wash',
        location: 'Adenta Commandos',
        hours: '8AM - 6PM',
        image: flier2,
        route: '/sparkle'
    },
    {
        id: 3,
        name: 'Premier Auto Wash',
        location: 'Adenta',
        hours: '8AM - 6PM',
        image: flier3,
        route: '/premier'
    },
    {
        id: 4,
        name: 'Elite Shine Car Wash',
        location: 'East Legon',
        hours: '8AM - 6PM',
        image: flier4,
        route: '/elite'
    },
    {
        id: 5,
        name: 'Radiant Ride',
        location: 'East Legon',
        hours: '8AM - 6PM',
        image: flier5,
        route: '/radiant'
    },
    {
        id: 6,
        name: 'Classic Car Wash',
        location: 'Adenta',
        hours: '8AM - 6PM',
        image: flier1,
        route: '/classic'
    },
    {
        id: 7,
        name: 'Pristine Splash Car Wash',
        location: 'Ashieye',
        hours: '8AM - 6PM',
        image: flier7,
        route: '/pristine'
    }
];

const WashPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredServices = carWashServices.filter(service =>
        service.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-14">
        <div className="flex justify-between items-center px-4 py-4 fixed h-28 w-full left-0 top-0 z-50 bg-black bg-opacity-60">
          <img className="w-[150px]" src={logos} alt="car logo" />
          <div className="flex justify-center items-center gap-6 text-xl font-semibold text-white">
            <p>Home</p>
            <p>Sign up</p>
            <p>Sign in</p>
          </div>
        </div>
      
        <div className="flex justify-center gap-3 items-center pt-36 px-4 sm:px-10">
          <button className="px-5 py-3 bg-white font-semibold text-black rounded-lg border-2 hover:bg-blue-600 focus:outline-none">
            ALL
          </button>
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search by your location"
              autoComplete="search"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full h-12 rounded-lg border outline-none border-gray-400 pl-10"
            />
            <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
          </div>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-4 sm:px-10">
          {filteredServices.map((service) => (
            <div key={service.id} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={service.image} alt="img" className="w-full h-[350px]" />
                </div>
                <div className="flip-card-back flex justify-center flex-col gap-3 items-center">
                  <h1 className="text-xl">{service.name}</h1>
                  <p>Location: {service.location}</p>
                  <p>Open hours: {service.hours}</p>
                  <button
                    onClick={() => navigate(service.route)}
                    className="p-4 my-5 border-2 border-gray-600 rounded-xl hover:bg-white hover:text-black hover:border-white transition duration-300"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default WashPage;
