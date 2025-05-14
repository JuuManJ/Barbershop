import { useState } from "react"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import logoB from "../../images/Banner/logoBck.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: " ",
    email: "",
    message: " ",
  });

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormSubmitted:", formData);
    setSubmitted(true);
  }




  return (
    <div>
      <Navbar />

      <div className=" w-full h-full relative">
        <img src={logoB} alt="" className="w-full h-60 objective-cover" />

      </div>

      <div className="absolute top-0 left-0"></div>
      <div className="absolute font-bold text-7xl w-full h-full top-0 flex flex-col
        justify-center md:m8-8 ml-3 text-white p-4">
        <p className='bg-teal-700 mt-2 ml-5 w-[450px] p-[3px]'>Contact</p>

      </div>


      {/* contact page deets */}

      <div className="flex flex-row space-x-40 p-28">


        <div className="leading-loose ">
          <h1 className="text-4xl font-bold mb-7 ">Hours</h1>
          <ul>
            <li className=''>Monday: 9am - 9pm </li>
            <li className=''>Tuesday: 9am - 9pm </li>
            <li className=''>Wednesday: 9am - 9pm </li>
            <li className=''>Thursday: 9am - 9pm </li>
            <li className=''>Friday: 9am - 9pm </li>
            <li className=''>Saturday: 9am - 5pm</li>
            <li className=''>Sunday: 12pm - 5pm</li>
          </ul>
        </div>


        {/* div for logins */}


        <div>
          <h1 className="text-4xl font-bold mb-7 ">Get in touch</h1>

          {/* FORM */}

          {submitted ? (
            <p className="text-blue-200 text-center font-semibold">Thank You! Your message has been sent.</p>
          ) : (


            <form onSubmit={handleSubmit}>

              <div className=" flex flex-col space-y-4 ">

                {/* name field */}
                <div className=" ">
                  <label htmlFor="firstname" className=" "> Name </label>
                  <input
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text" id="firstname" name="firstname" placeholder="name"
                    value={formData.name} onChange={handleChange} required />
                </div>

                {/* email field */}
                <div>
                  <label htmlFor="email"> Email  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text" id="email" name="email" placeholder="email"
                    value={formData.email} onChange={handleChange} required />
                </div>

                {/* message field */}
                <div>
                  <label htmlFor="message"> Watsup G  </label>
                  <input
                    className="w-full px-4 py-7 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="text" id="message" name="message" placeholder="message"
                    value={formData.message} onChange={handleChange} />
                </div>

                {/* submit button */}
                <button type="submit"
                  className="w-full bg-orange-500 text-black py-2 rounded-md hover:bg-purple-200 transition" >Send Message</button>

              </div>
            </form>
          )}
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Contact
