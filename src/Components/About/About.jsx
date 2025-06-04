import whatwd from '../../images/WhatWD/whatwd.png'

const About = () => {
  return (
    <div className=' '>
      <div className='flex items-center p-4 bg-gray-100 '>

        {/* about image */}
        <div>
          <img src={whatwd} alt="" className='w-[3000px]  mt-10 p-10' />
        </div>


        {/* about text */}
        <div></div>
        <div className=''>
          <h2 className='font-bold text-4xl tracking-wide leading-loose'>Come Let us Help you get Babes</h2>
          <p className='tracking-wide leading-loose'>We pride ourselves on providing top-tier grooming services provided specifically for Black hair.
            We offer a welcoming and vibrant atmosphere where community and culture is celebrated,
            each visit is more than just a haircut; it is an experience that combines style, comfort, and comraderie.
            Come in today and discover why our barbershop is the cornerstone of the neighborhood</p>
          <p>PLEASE NOTE: Booked appointments are prioritised!</p>
        </div>
      </div>


    </div>
  )
}

export default About
