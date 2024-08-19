import React, { useEffect, useState } from 'react';
import { flier1, flier2, flier3, flier4, flier5, flier6, flier7 } from '../assets';
import { SearchIcon } from 'lucide-react';
import './card.css';
import './flipCards.css';
import { useNavigate } from 'react-router-dom';
import { apiGetCarServiceDetails } from '../services/washpage';

const carServices = [
  {
    companyName: 'Aquagleam Auto Wash',
    location: 'Madina',
    hours: '8AM - 6PM',
    image: flier6,
    route: '/premium'
  },
  {
    companyName: 'Sparkle Wave Car Wash',
    location: 'Madina',
    hours: '8AM - 6PM',
    image: flier2,
    route: '/sparkle'
  },
  {
    companyName: 'Premier Auto Wash',
    location: 'Adenta',
    hours: '8AM - 6PM',
    image: flier3,
    route: '/premier'
  },
  {
    companyName: 'Elite Shine Car Wash',
    location: 'East Legon',
    hours: '8AM - 6PM',
    image: flier4,
    route: '/elite'
  },
  {
    companyName: 'Radiant Ride',
    location: 'East Legon',
    hours: '8AM - 6PM',
    image: flier5,
    route: '/radiant'
  },
  {
    companyName: 'Classic Car Wash',
    location: 'Adenta',
    hours: '8AM - 6PM',
    image: flier1,
    route: '/classic'
  },
  {
    companyName: 'Pristine Splash Car Wash',
    location: 'Ashieye',
    hours: '8AM - 6PM',
    image: flier7,
    route: '/pristine'
  }
];

const WashPage = () => {
  const [CarService, setCarService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const CarServiceDetails = async () => {
      try {
        setLoading(true);
        const carServiceData = await apiGetCarServiceDetails('RadiantRide');
        setCarService(carServiceData);
        console.log(CarService); // Log the fetched data for debugging
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    CarServiceDetails();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowAll = () => {
    setSearchTerm('');
  };

  // if (loading) {
  //   return <div>Loading.....</div>;
  // }

  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-center gap-3 items-center pt-36 px-4 sm:px-10">
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
          {carServices.map((service, index) => (
            <div key={index} className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  <img className="" src={service.image} alt="Card image cap" />
                </div>
                <div className="card-body pt-0">
                  <h1 className="text-2xl">{service.companyName}</h1>
                  <div className='flex justify-evenly items-center'>
                    <div className='flex items-start flex-col'>
                      <span className='text-lg'>Location: {service.location}</span>
                      <span className='text-lg'>Open hours: {service.hours}</span>
                    </div>
                    <button
                      onClick={() => navigate(service.route)}
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
  );
};

export default WashPage;
