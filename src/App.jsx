import './App.css'
import { Routes, Route } from 'react-router-dom'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Bookings from './Pages/Booking/Bookings'
import Calendar from './Pages/Calendar/Calendar'
import Contact from './Pages/Contact/Contact'


function App() {

  return (
    <>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='bookings' element={<Bookings/>}/>
      <Route path='calendar' element={<Calendar/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Routes>


    </>
  )
}

export default App
