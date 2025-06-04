import { Link } from 'react-router-dom'
import { useState } from "react";
import logoH from "../../images/Banner/logoHB.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full sticky top-0 z-50 shadow-md ">

      <nav className="flex justify-evenly items-center">

        {/* HAMBURGER BUTTON FOR mobile */}
        {/* <div><lINK to='bookings'> */}
        <Link to='bookings'>
           <button
          className=" md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span>&#x2715;</span>
          ) : (
            <span>&#x9776;</span>
          )}
          BOOK NOW</button>
          </Link>
          {/* </lINK></div> */}

        {/* // hamburger menu dropdown */}
        <div className={"  transition-all duration-300 ${isOpen ?  'hidden'}  sm:right-0 md:hidden"}>
          <ul className=" bg-gray-800 py-4 space-y-3 ">
            <li><Link to="/" className="block py-2 hover:bg-gray-700">Home</Link></li>
            <li><Link to="/services" className="block py-2 hover:bg-gray-700">Services</Link></li>
            <li><Link to="gallery" className="block py-2 hover:bg-gray-700">Gallery</Link></li>
            <li><Link to="contact" className="block py-2 hover:bg-gray-700">Contact us</Link></li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className='sm:hidden md:flex'>
          <ul className=" flex space-x-6 font-medium ">
            <Link to='/'><li className='hover:-translate-y-1 transition'>Home</li></Link>
            <Link to='services'><li className='hover:-translate-y-1 transition'>Services</li></Link>
            <Link><li className='hover:-translate-y-1 transition'>About</li></Link>
          </ul>
        </div>
        <div>
          <Link to='/'><img src={logoH} alt="logo here" className='w-20 hover:cursor-pointer sm:left-5 sm:top-10' /></Link>
        </div>
        <div className='sm:hidden md:flex'>
          <ul className=" flex items-center space-x-4 font-medium ">
            <Link to='/gallery'><li className="hover:-translate-y-1 transition">Gallery</li></Link>

            <Link to='/contact'><li className="hover:-translate-y-1 transition">Contact Us</li></Link>
            <Link to='bookings'>
              <button 
              className='bg-white text-black hover:bg-orange-400 hover:text-white font-bold py-2 px-4 rounded-full ml-14'>
                Book now
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </div >
  )
}

export default Navbar;
