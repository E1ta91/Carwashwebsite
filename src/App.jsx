
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
import Home from './pages/home'
import RootLayout from './constants/layout/rootlayout'




function App() {
  const router = createBrowserRouter([

  
        {
          path: '/',
          element: <Home />
        },
      

    {
      path: 'select/services',
      element: <Carservice />
    },

    {
      path: 'wash',
      element: <WashPage />
    },

    

    {
      path: 'signup',
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
      path: 'premier/:id',
      element: <Premier />
    },
    

    {
      path: 'smooth',
      element: <Smooth />
    },
    {
      path: 'auto',
      element: <Auto />
    },
    {
      path: 'speedyfix',
      element: <SpeedyFix />
    },
    {
      path: 'reviveride',
      element: <ReviveRide />
    },
    {
      path: 'roadready',
      element: <RoadReady />
    },

    
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
