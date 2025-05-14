import { Link } from "react-router-dom"
import work1 from "../../images/Our Work/works.png"
import work2 from "../../images/Our Work/works2.png"
import work3 from "../../images/Our Work/works3.png"

const Works = () => {
  return (
    <div>
      <div className="font-bold text-3xl text-center mt-8 sm:ml-60 md:ml-96 lg:w-full lg:mr-40 "> ~ Our work ~</div>

      <div className="flex mt-12 space-x-[40px] justify-center sm:ml-44 md:ml-96">

        <img src={work1} alt="" className="w-[325px] h-[350px]" />

        <img src={work2} alt="" className="w-[350px] h-[350px]" />

        <img src={work3} alt="" className="w-[320px] h-[350px]" />

      </div>

      <div className="justify-center items-center">
        <Link to='/gallery'>
          <button className="text-black border-2 hover:bg-orange-700 
            font-bold border-cyan-700 hover:text-white py-4 px-8 mt-8 
            rounded-full items-center justify-center ml-[530px] drop-shadow-md md:ml-[500px]  ">View gallery</button>
        </Link>
      </div>






    </div>
  )
}

export default Works
