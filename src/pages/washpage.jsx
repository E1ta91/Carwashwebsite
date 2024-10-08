import React, { useEffect, useState } from 'react';
import { flier1, flier2, flier3, flier4, flier5, flier6, flier7 } from '../assets';
import logo from '../assets/images/logo.png';
import { SearchIcon } from 'lucide-react';
import './card.css';
import './flipCards.css';
import { apiGetCarCare } from '../services/washpage';
import Navbar from '../constants/Navbar';
import { logos } from "../assets";
import ins from '../assets/images/ins.png';
import you from '../assets/images/you.png';
import face from '../assets/images/face.png';
import { useNavigate } from "react-router-dom";
import Drawer from "../components/drawer";
import DrawNav from "../components/drawnav";
import DrawerFooter from "../components/drawerfooter";
import { BoltIcon } from '@heroicons/react/24/outline';

const WashPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [CarService, setCarService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const CarServiceDetails = async () => {
      try {
        setLoading(true);
        const carServiceData = await apiGetCarCare();
        setCarService(carServiceData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    CarServiceDetails();
  }, []);

  if (loading) {
    return (
      <div className='w-screen h-screen rounded-full flex justify-center items-center'>
        <img className='animate-ping justify-center items-center flex w-[300px]' src={logo} alt="image" />
      </div>
    );
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowAll = () => {
    setSearchTerm('');
  };

  const filteredServices = CarService.filter(service =>
    service.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const serviceType = filteredServices.filter(service =>
    service.serviceType === 'Car-Wash'
  );

  return (
    <div>
      <header className="flex shadow-md md:shadow-none">
        <div className="hidden lg:flex w-11/12 mt-5 items-center justify-evenly z-40 bg-zinc-800 mb-5 rounded-xl fixed ml-14">
          <nav className="text-white flex text-lg gap-16">
            <button onClick={() => handleNavigation('/')} className="hover:underline">Home</button>
            <button onClick={() => handleNavigation('/select/services')} className="hover:underline">Car Services</button>
          </nav>
          <img className="h-20 mx-4 pr-8 cursor-pointer" src={logos} alt="logo" />
          <div className="flex items-center space-x-5">
            <img className="w-8 h-8" src={ins} alt="Instagram" />
            <img className="w-16 h-16" src={you} alt="YouTube" />
            <img className="w-8 h-8" src={face} alt="Facebook" />
          </div>
        </div>

        {/* For mobile screen */}
        <div className="flex lg:hidden justify-between items-center pt-3 ml-4 w-11/12 overflow-x-hidden bg-zinc-900 fixed rounded-b-lg z-40">
          <div>
            <img
              className="lg:hidden rounded-3xl m-2"
              src={logos}
              alt="logo"
              width="80"
            />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-15" onClick={() => setIsOpen(!isOpen)}>
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>

          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <DrawNav path={"/"} label={"Home"} setIsOpen={setIsOpen} />
            <DrawNav path={"/select/services"} label={"Car Services"} setIsOpen={setIsOpen} />
            <DrawerFooter />
          </Drawer>
        </div>
      </header>

      <div className="flex flex-col gap-9">
        <div className="flex justify-center gap-9 items-center pt-36 px-4 sm:px-10">
          <button className="px-5 py-3 bg-white font-semibold text-black rounded-lg border-2 hover:bg-blue-600 focus:outline-none" onClick={handleShowAll}>
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

        <div className='px-8 sm:px-10 mx-14 sm:mx-16 mb-10'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-evenly gap-10">
            {serviceType.map((service, index) => (
              <div key={index} className="col-md-4 mt-4">
                <div className="card profile-card-5">
                  <div className="card-img-block">
                    <img className="" src={`https://savefiles.org/${service.image}?shareable_link=335`} alt="Card image cap" />
                  </div>
                  <div className="card-body pt-0">
                    <h1 className="text-2xl">{service.companyName}</h1>
                    <div className='flex justify-evenly items-center'>
                      <div className='flex items-start flex-col'>
                        <span className='text-lg'>Location: {service.location}</span>
                        <span className='text-lg'>Open hours: {service.time}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/premier/${service.id}`)}
                        className="p-2 my-5 border-2 border-gray-600 rounded-xl hover:bg-blue-600 hover:text-white hover:border-white transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashPage;
