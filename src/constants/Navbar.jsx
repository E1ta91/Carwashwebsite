
import { logos } from '../assets'

const Navbar = () => {
  return (
    <div>
      <img className='w-[200px]' src={logos} alt="image" /> 

      <div>
        <h1>Home</h1>  
        <h1>Sign up</h1>  
        <h1>Sign in</h1>  
      </div>

    </div>
  )
}
export default Navbar