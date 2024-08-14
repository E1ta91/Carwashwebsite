
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
  return (
    <CirclesWithBar
    height="30"
    width="30"
    color="#000000"
    outerCircleColor="#000000"
    innerCircleColor="#000000"
    barColor="#000000"
    ariaLabel="circles-with-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
  )
}

export default Loader