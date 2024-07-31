
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Home from './pages/home'
import Select from './pages/select'

function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: 'signin',
    element: <Signin/>
   },

  {
    path: 'signup',
    element: <Signup/>
   },
  {
    path: 'select',
    element: <Select/>
   }



 ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
