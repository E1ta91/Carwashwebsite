import { useNavigate } from "react-router-dom"
import Navbar from "../constants/Navbar";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      
      <h1 className='text-center text-3xl flex justify-center items-center'>
              Click here to <a href="#" onClick={() => navigate('/signup')} className='text-blue-600 font-semibold'>Sign up</a>
            </h1>


    </div>
  )
}

export default Home