import style from '../../styles/ids.module.css'
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMenu } from '../../redux/menuSlice';

const id = ({ dessert }) => {
  const [quantity , setQuantity] = useState(1);
  const dispatch = useDispatch()
  const price = dessert.price;

  const cartClick = () => {
    dispatch(addMenu({ ...dessert,price,quantity}))
  };
  return (
    <>
      <Navbar />
      <div className="mt-40 mb-20 flex flex-col items-center justify-center px-5 md:flex-row">
        <div className="contents w-fit px-4 md:w-2/4 md:px-0">
          <Image src={dessert.img} height="500px" width="500px" />
        </div>
        <div className="flex flex-col items-center justify-center  text-center md:w-2/4">
          <h1 className=' pb-5 text-4xl'>{dessert.title}</h1>
          <p className="pt-0  ">Price Rs. ₹{price}</p>
<p className="pt-0 pb-5 ">Quantity { quantity}</p>
          <p className="pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            eveniet quidem voluptate recusandae consequatur, aspernatur ea,
            beatae animi maxime distinctio ipsam dolore cumque unde repellendus
            fugiat quibusdam minima debitis totam.
          </p>
          <div>
            <input
              type="number"
              onChange={(e)=> setQuantity(e.target.value)}
              defaultValue={1}
              className="border-solid-black mx-4 w-14 border"
            />
              <button
                className="bg-rose-900 px-2 py-2 text-white"
                onClick={cartClick}
              >
                Add To Cart
              </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/menus/${params.id}`)
  return {
    props: {
      dessert: res.data,
    },
  }
}
export default id
