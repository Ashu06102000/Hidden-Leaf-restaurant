import Image from 'next/image'
import dessert2 from '../image/dessert2.jpg'
import style from '../styles/menu.module.css'
const Menu = () => {
  return (
    <>
      <div className="mt-20 mb-20 flex flex-col items-center justify-center px-5 md:flex-row">
        <div className="w-fit px-4 md:w-2/4 md:px-0">
          <Image src={dessert2} />
        </div>
        <div className="flex flex-col items-center justify-center px-8 text-center md:w-2/4">
          <h1 className={style.menu}>Our Desserts</h1>
          <p className="pt-5 pb-10">
            {' '}
            You can talk about our desserts for hours, but let's just say the
            main thing - the finest coffie, and everything is made by
            experianced cheifs. chocolates are delicious and varied.. The main
            dishes in our menu are presented from all over the world and
            prepared with love...{' '}
          </p>
        <div className="mt-2 mb-2 underline hover:text-rose-900">
          
        </div>
        </div>
      </div>
    </>
  )
}
export default Menu
