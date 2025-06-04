import { Link } from 'react-router-dom';
import bblogo1 from '../../images/logo/bb logo1.jpg';

const Hero = () => {
  return (
    <div className=' w-screen relative '>

      {/* hero image */}
      <div className='w-screen h-screen relative '>
        <div className='absolute inset-0 bg-black bg-opacity-50 top-20 lg:hidden'></div>
        <img src={bblogo1} alt="" className='w-full h-full object-cover md:w-full ' />
      </div>

      {/* hero text n content */}
      <div className="absolute top-0 left-0 "></div>
       <div className='absolute inset-0 bg-black bg-opacity-50'></div> 
      <div className="absolute font-bold top-0 w-full h-full flex flex-col justify-center items-center  ml-3 p-4 mt-24 sm:px-8 md:px-16">
        <h1 className=' font-bold animate-fade-in text-white md:text-6xl'>AFRO-BARBERSHOP </h1>
        <p className=' mt-4 opacity-80 text-white md:text-6xl' >IN THE HEART OF LUBLIN </p>

        <div className='mt-5'>
          <Link to='bookings'>
            <button 
            className='bg-white hover:bg-orange-400 text-black font-bold py-4 px-6 rounded-full animate-bounce delay-500 transition'>Book now</button>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default Hero
