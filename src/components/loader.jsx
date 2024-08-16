
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
  return (
    <CirclesWithBar
    height="30"
    width="30"
    color="#000000"
    outerCircleColor="#FFFFFF"
    innerCircleColor="#FFFFFF"
    barColor="#FFFFFF"
    ariaLabel="circles-with-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   
    />
  )
}

export default Loader