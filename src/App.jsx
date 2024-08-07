
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Home from './pages/home'
import Select from './pages/select'
import Carwash from './pages/carwash'
import Carservice from './pages/carservice'
import Payment from './pages/payment'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },

    {
      path: 'signin',
      element: <Signin />
    },

    {
      path: 'signup',
      element: <Signup />
    },

    {
      path: 'select',
      element: <Select />
    },

    {
      path: 'select/wash',
      element: <Carwash/>
    },

    {
      path: 'select/services',
      element: <Carservice/>
    },
    {
      path: 'payment',
      element:<Payment/>
    }



  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
