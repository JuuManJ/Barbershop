import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>

      <div className="bg-purple-900 mt-3 p-10 sm:w-[130vw] md:w-[140vw] md:justify-center lg:w-full ">
        <div className=" flex flex-row gap-2 text-white space-x-40">

          <div className="mb-5 leading-loose space-y-6">
            <h2 className="flex text-3xl font-bold sm:flex">Quick Links </h2>
            <ul>
              <Link to='/'><li className='hover:-translate-y-1 transition'>Home</li></Link>
              <Link to='services'><li className='hover:-translate-y-1 transition'>Services</li></Link>
              <Link><li className='hover:-translate-y-1 transition'>About</li></Link>
              <Link to='/gallery'><li className='hover:-translate-y-1 transition'>Gallery</li></Link>
            </ul>
          </div>

          <div className="mb-5 space-y-2 leading-loose">
            <h3 className=" flex text-3xl font-bold sm:text-2xl sm:flex">Opening hours </h3>
            <ul>
              <li className=''>Monday - Friday:   9am - 9pm </li>
              <li className=''>Saturday: 9am - 5pm</li>
              <li className=''>Sunday: 12pm - 5pm</li>
            </ul>
          </div>

          <div className="mb-5 leading-loose space-y-6">
            <h4 className="text-3xl font-bold">Contact us</h4>
            <ul>
              <li >Prosta 30</li>
              <li >Lublin Ponikwoda</li>
              <Link><ul className='underline'>048 782 260 956</ul></Link>
              <Link><ul className='underline'>utazi.michael@yahoo.com</ul></Link>
            </ul>
          </div>

          <div className="bg-white">
            <hr />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Footer
