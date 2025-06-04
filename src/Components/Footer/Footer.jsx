import { faInstagram, faWhatsapp, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <div>

      <div className="bg-black mt-3 p-10 ">
        <div className=" flex flex-row gap-2 text-white justify-evenly ">

          {/* faIcons */}
          <div>
            <h1 className=" mb-6">CONNECT WITH US</h1>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/" 
            target="_blank" rel=" " 
            className="w-12 h-12 flex  items-center justify-center rounded-full bg-green-100 hover:bg-pink-200 text-pink-600 text-2xl transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://web.whatsapp.com/" 
            target="_blank" rel=" " 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 hover:bg-pink-200 text-pink-600 text-4xl transition">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a href="https://www.tiktok.com/explore" 
            target="_blank" rel=" " 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 hover:bg-pink-200 text-pink-600 text-4xl transition">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            </div>

          </div>




          <div className="mb-5 space-y-2 leading-loose">
            <h3 className=" flex text-3xl font-bold ">Opening hours </h3>
            <ul>
              <li className=''>Monday - Friday:   9am - 9pm </li>
              <li className=''>Saturday: 9am - 5pm</li>
              <li className=''>Sunday: 12pm - 5pm</li>
            </ul>
          </div>

          <div className="mb-5 leading-loose space-y-2">
            <h4 className="text-3xl font-bold">Contact us</h4>
            <ul>
              <li >Prosta 30</li>
              <li >Lublin Ponikwoda</li>
              <Link><ul className='underline'>+48 782 260 956</ul></Link>
              <Link><ul className='underline'>utazi.michael@yahoo.com</ul></Link>
            </ul>
          </div>

          {/* <div className="bg-white">
            <hr />
          </div> */}

        </div>

      </div>
    </div>
  )
}

export default Footer
