import GLogo from '../../images/logo/bblogo4.png'
import hstyle1 from '../../images/Gallery/hstyle.png'
import hstyle2 from '../../images/Gallery/hstyle2.png'
import hstyle3 from '../../images/Gallery/hstyle3.png'
import hstyle4 from '../../images/Gallery/hstyle4.png'
import hstyle5 from '../../images/Gallery/hstyle5.png'
import hstyle6 from '../../images/Gallery/hstyle6.png'
import hstyle7 from '../../images/Gallery/hstyle7.png'
import hstyle8 from '../../images/Gallery/hstyle8.jpeg'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'



const Gallery = () => {
  return (
    <div>

      <Navbar />


      <div className='w-full h-screen relative'>
        <img src={GLogo} alt="" className='w-full h-[600px] object-cover' />
      </div>

      <div className="absolute font-bold text-4xl top-0 w-full h-full flex flex-col 
        justify-center md:m8-8 ml-3 text-white p-4 mt-24">
        <p className='bg-gray-700 mt-2 ml-7 w-[210px] p-[3px]'>Exhibitions</p>

        <div className='mt-5'>
        </div>
      </div>

      {/* image styles and names */}
      <div className=' grid grid-cols-4 gap-8 p-8'>

        <div>
          <img src={hstyle2} alt="" className='w-[320px] h-96' />
          <p className='mt-4'>Low Afro fade</p>
        </div>

        <div>
          <img src={hstyle3} alt="" className='w-96 h-96' />
          <p className='mt-4'> High fade </p>
        </div>

        <div>
          <img src={hstyle4} alt="" className='w-80 h-96' />
          <p className="mt-4">  Afro high fade with beards</p>
        </div>


        <div>
          <img src={hstyle5} alt="" className='w-72 h-96' />
          <p className='mt-4'>High top bush fade</p>
        </div>

        <div>
          <img src={hstyle6} alt="" className='w-80 h-[405px]' />
          <p className="mt-4">High skin fade</p>
        </div>

        <div>
          <img src={hstyle7} alt="" className='w-96 h-[405px]' />
          <p className="mt-4"> Beard trim</p>
        </div>

        <div>
          <img src={hstyle8} alt="" className='w-80 h-[405px]' />
          <p className="mt-4">Skin cut</p>
        </div>

        <div>
          <img src={hstyle1} alt="" className="w-[290px] h-[405px]" />
          <p className="mt-4">Twisting</p>
        </div>
      </div>


      {/* buttons have their own div the info on p tags stand alone in general div */}

      <div className='flex space-x-60 ml-44 '>

        <div className=''>
          <h1 className='font-bold text-4xl mb-6 '>Ready to book ? </h1>

          <div className='ml-7'>
            <Link to='bookings'>
              <button className='bg-white border-2 border-cyan-700 hover:bg-orange-500 text-black font-bold
          py-4 px-10 rounded-full'>Book now</button>
            </Link>
          </div>
        </div>


        <div>
          <h2 className='font-bold text-4xl mb-6'>Need more info ? </h2>

          <div className="ml-9">
            <Link to='contact'>
              <button className='bg-orange-500 border-2 border-cyan-700 hover:bg-white text-black font-bold
          py-4 px-10 rounded-full'>Contact us</button>
            </Link>
          </div>

        </div>

      </div>


      <Footer />

    </div>

  )
}

export default Gallery
