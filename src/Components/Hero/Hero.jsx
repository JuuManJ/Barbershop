import { Link } from 'react-router-dom';
import bblogo1 from '../../images/logo/bb logo1.jpg';

const Hero = () => {
  return (
    <div className=' w-full  lg:h-screen  '>

      {/* hero image */}
      <div className='w-full h-screen relative sm:w-[130vw]  md:w-[140vw] lg:w-full  '>
        <div className='absolute inset-0 bg-black bg-opacity-50 top-20'></div>
        <img src={bblogo1} alt="" className='w-full h-full object-cover ' />
      </div>

      {/* hero text n content */}
      <div className="absolute top-0 left-0 "></div>
      {/* <div className='absolute inset-0 bg-black bg-opacity-50'></div> */}
      <div className="absolute font-bold text-4xl top-0 w-full h-full flex flex-col 
        justify-center items-center  ml-3 text-white p-4 mt-24 sm:mt-56 sm:ml-[100px] ">
        <h1 className=' text-4l md:text-6xl font-bold animate-fade-in'>AFRO-BARBERSHOP </h1>
        <p className='mt-4 text-lg md:text-2l opacity-80'>IN THE HEART OF LUBLIN </p>

        <div className='mt-5'>
          <Link to='bookings'>
            <button className='bg-white hover:bg-orange-400 
          text-black font-bold py-4 px-6 rounded-full animate-bounce delay-500'>Book now</button>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default Hero
