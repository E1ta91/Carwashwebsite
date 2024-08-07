import { useNavigate } from "react-router-dom";
import carvids from "../assets/images/carvids.mp4";


const Carwash = () => {
  const navigate = useNavigate();
  return (
    <div className="video-container relative w-full h-[100vh]">
      <video className="w-full h-full object-cover" autoPlay loop muted src={carvids}></video>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <form className="flex flex-col gap-5 max-w-md mx-auto bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Full name"
            className="w-full px-4 py-2 border-2 border-black text-gray-600 rounded-lg outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            placeholder="Phone number"
            className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="location"
            placeholder="Your location"
            className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="type-of-car"
            placeholder="Type of car"
            className="w-full px-4 py-2 border-2 border-blue-600 text-gray-600 rounded-lg outline-none"
          />
        </div>

      
        <button
          type="submit"
          className="w-full h-10 mt-2 bg-blue-600 text-white rounded-lg border border-white hover:bg-gray-500 transition duration-200"
        onClick={() => navigate('/payment')}  
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Carwash;
