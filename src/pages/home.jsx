import { hd } from "../assets";
import "../styles/hero.css";

const Home = () => {
  return (
    <div className="bg-[#0F6EDB] w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="rectangles lg:flex lg:flex-wrap lg:justify-center lg:gap-4">
          {[...Array(10)].map((_, index) => (
            <span key={index} className="rectangle-item"></span>
          ))}
        </div>
      </div>

      <div id="home" className="container flex flex-col lg:flex-row lg:justify-center lg:items-center pt-20 w-full px-4 lg:px-0 z-10">
        <div className="lg:max-w-[62%] mb-11 mx-auto lg:mx-0">
          <img src={hd} alt="hero" className="w-full h-auto max-w-[500px] md:max-w-[600px] lg:max-w-[800px]" />
        </div>

        <div className="text-center lg:text-left lg:max-w-[40%] px-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-white">
            Experience the Ultimate Shine!
          </h1>
          <p className="mt-4 text-base wrapper sm:text-lg md:text-xl lg:text-xl leading-[1.5] font-normal italic p-2 rounded-2xl">
            Discover professional car wash services that make your ride sparkle like new. Our expert team uses top-notch techniques and eco-friendly products to ensure your car gets the care it deserves. Come in today and let us give your car the shine it deserves!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
