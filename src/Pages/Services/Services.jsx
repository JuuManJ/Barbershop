import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import logoS from '../../images/logo/bb logo2.png'

const Services = () => {
  return (
      <div>

       {/* The navbar isn't working */}
        <Navbar/>


      <div className='w-full h-full relative'>
        <img src={logoS} alt="" className='w-full h-full object-cover' />
      </div>


      {/* services text */}
      

      <div className="absolute top-0 left-0"></div>
        <div className="absolute font-bold text-7xl w-full h-full top-0 flex flex-col 
        justify-center md:m8-8 ml-3 text-white p-4">
            <p className=''>Services</p>
            

        </div>

        {/* services contents */}

         <div className='flex flex-col justify-center items-center mt-10 ' >

       <div className='mb-20'>
          <h2 className='font-bold text-4xl'>Dread & Twisting</h2>
          <p className=' mt-4'> Call to Book. +48782260956</p>
       </div>

       <div className='mb-20 leading-loose' >
       <h3 className='font-bold text-4xl mb-10'>Haircuts </h3>
       <p>Fade (high, low, taper)<span className='ml-36'>$15</span> </p>
       <p>Shave<span className='ml-[258px]'>$15</span> </p>
       <p>Afro<span className='ml-[270px]'>$15</span> </p>
       <p>Buzz cut<span className='ml-[241px]'>$15</span> </p>
       <p>Kids cut<span className='ml-[245px]'>$15</span> </p>
       </div>

       <div className='mb-15 leading-loose'>
       <h3 className='font-bold text-4xl mb-10'>Beard  </h3>
       <p>Trim <span className='ml-[280px]'>$15</span> </p>
       <p>Trim with style <span className='ml-[210px]'>$15</span> </p>
       <p>Style with Haircut<span className='ml-[193px]'>$15</span> </p>
       <p>Shave <span className='ml-[270px]'>$15</span> </p>
       <p>Kids cut<span className='ml-[260px]'>$15</span> </p>
       </div>


        </div>



        <Footer/>
    </div>
  )
}

export default Services