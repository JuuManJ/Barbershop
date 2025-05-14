import products from '../../images/Products/products3.png'

const Products = () => {
  return (
    <div>


      <div className='bg-purple-900 mt-8 flex flex-row-reverse justify-around sm:w-[130vw] md:w-[140vw] lg:w-full'>
        <div className=' '>
          <h2 className='font-bold text-4xl text-white'>Products</h2>
          <p className='leadin-loose tracking-wide text-white'>We sell products for black hair. <br /> Ranging from moisturizers for hair, beards,
            essential oils, shaving creams <br /> afro combs, curl foam, and hair growth supplements.</p>


        </div>

        <div className=''>
          <img src={products} alt="" className='w-[600px]' />
        </div>
      </div>


    </div>
  )
}

export default Products
