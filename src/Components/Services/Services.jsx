import haircut from '../../images/Services/haircut.png.png'
import beardtrim from '../../images/Services/beardtrim.png.png'
import dreadtwist from '../../images/Services/dreadtwist.png'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div>
            <div className=' text-white bg-emerald-900 flex justify-center items-center p-10 sm:p-15  space-x-[70px]  mt-10 '>

                {/* haircut  */}
                <Link to='bookings'>
                    <div 
                    className='flex flex-col items-center border-2 p-10  rounded-lg 
                    transform hover:bg-slate-500 transition duration-500 hover:scale-125 cursor-pointer
             md:hover:bg-yellow-800 md:hover:scale-70 md:hover:transform md:transition-all md:cursor-pointer md:duration-500'>
                        <div>
                            <img src={haircut} alt="" className='w-12 h-12' />
                        </div>
                        <div className='font-bold'> Haircut </div>
                        <div>
                            <p>Get your haircut</p>
                            <p className='mt-4 font-bold text-center text-orange-500'>$20</p>
                        </div>

                    </div>
                </Link>


                {/* beardtrim  */}
                <Link to='bookings'>
                    <div className='flex flex-col items-center border-2 p-10 rounded-lg
            transform hover:bg-yellow-800 transition duration-500 hover:scale-125 cursor-pointer'>
                        <div>
                            <img src={beardtrim} alt="" className='w-12 h-12' />
                        </div>
                        <div className='font-bold'> Beard trim</div>
                        <div>
                            <p>Get your beard trim</p>
                            <p className='mt-4 font-bold text-center text-orange-500'>$20</p>
                        </div>

                    </div>
                </Link>

                {/* dreadtwist */}
                <Link to='bookings'>
                    <div className='flex flex-col items-center border-2 p-10 rounded-lg
            transform hover:bg-yellow-800 transition duration-500 hover:scale-125 cursor-pointer'>
                        <div>
                            <img src={dreadtwist} alt="" className='w-12 h-12' />
                        </div>
                        <div className='font-bold'> Dread twists</div>
                        <div>
                            <p> Get your dread twist</p>
                            <p className='mt-4 font-bold text-center text-orange-500'>Price on consultation</p>
                        </div>

                    </div>
                </Link>



            </div>



        </div>
    )
}

export default Services

