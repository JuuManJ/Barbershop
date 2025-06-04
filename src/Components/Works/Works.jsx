import { Link } from "react-router-dom"
import work1 from "../../images/Our Work/works.png"
import work2 from "../../images/Our Work/works2.png"
import work3 from "../../images/Our Work/works3.png"

const Works = () => {
  return (
    <div>
      <div className="font-bold text-3xl text-center mt-8 "> ~ My work ~</div>

      <div className="flex mt-12 space-x-16 justify-center sm:justify-items-center ">

        <img src={work1} alt="" className="  " />

        <img src={work2} alt="" className=" " />

        <img src={work3} alt="" className="h-60" />

      </div>

      <div className="flex items-center justify-center">
        <Link to='/gallery'>
          <button className="text-black border-2 hover:bg-orange-700 font-bold border-cyan-700
           hover:text-white py-4 px-8 mt-8 rounded-full items-center justify-center  ">View gallery</button>
        </Link>
      </div>


    </div>
  )
}

export default Works
