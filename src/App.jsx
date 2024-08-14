
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Select from './pages/select'

import Carservice from './pages/carservice'
import WashPage from './pages/washpage'
import Premium from './pages/premium'
import Sparkle from './pages/sparkle'
import Premier from './pages/premier'
import Elite from './pages/elite'
import Radiant from './pages/radiant'
import Classic from './pages/classic'
import Pristine from './pages/pristine'
import Smooth from './pages/smooth'
import Auto from './pages/auto'
import SpeedyFix from './pages/speedyfix'
import ReviveRide from './pages/reviveride'
import RoadReady from './pages/roadready'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Signup />
    },

    {
      path: 'signin',
      element: <Signin />
    },

  
    {
      path: 'select',
      element: <Select />
    },

    

    {
      path: 'wash',
      element: <WashPage/>
    },

    {
      path: 'select/services',
      element: <Carservice/>
    },
    {
      path: 'premium',
      element: <Premium/>
    },
    {
      path: 'sparkle',
      element: <Sparkle/>
    },
    {
      path: 'premier',
      element: <Premier/>
    },
    {
      path: 'elite',
      element: <Elite/>
    },
    {
      path: 'radiant',
      element: <Radiant/>
    },
    {
      path: 'classic',
      element: <Classic/>
    },
    {
      path: 'pristine',
      element: <Pristine/>
    },
    {
      path: 'smooth',
      element: <Smooth/>
    },
    {
      path: 'auto',
      element: <Auto/>
    },
    {
      path: 'speedyfix',
      element: <SpeedyFix/>
    },
    {
      path: 'reviveride',
      element: <ReviveRide/>
    },
    {
      path: 'roadready',
      element: <RoadReady/>
    },
    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
