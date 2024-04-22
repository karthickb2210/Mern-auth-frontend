import { Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import axios from 'axios'
import { Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './Pages/Dashboard'
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true



function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:3000}} />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
