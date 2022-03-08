import { ShoppingBagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <>
      <div className="fixed top-0 z-10 w-screen  bg-white">
        <div className=" mt-0 flex items-center justify-around pt-4 pb-4 align-middle">
          <button className="flex  items-center">
            <ShoppingBagIcon className="h-4 w-4" />
            
            <Link href="/cart" passHref>
              <h2 className=" text-black hover:text-red-900">CART</h2>
             
            </Link>
            <p className='ml-2 p-1 text-rose-900 border-black-900 border'>{quantity}</p>
          </button>
          <div className="logo">
            <Link href="/" passHref>
             <a >
             <h1 className="xs:text-base xl:text-5x1 text-red-900 sm:text-3xl  md:text-4xl ">
                Hidden-Leaf Deserts
              </h1>
             </a>
            </Link>
          </div>
          <Link href="#menu" passHref>
            <h2 className=" cursor-pointer text-black hover:text-red-900">
             MENU
            </h2>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
