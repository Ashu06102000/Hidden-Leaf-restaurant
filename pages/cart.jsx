import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useRouter } from 'next/router'
import { reset } from '../redux/menuSlice'
import { useState } from 'react'
import OrderDetail from '../components/OrderDetail'

const cart = () => {
  const cart = useSelector((state) => state.cart)
  const [cash, setCash] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap items-center justify-center ">
        {cart.menus.map((menu) => (
          <div key={menu._id}>
            <div className="mt-20 ">
              <div className="flex  items-center justify-center text-center ">
                <div className="border border-b-black bg-rose-400 px-20">
                  <p className=" mt-5 font-bold uppercase">Product</p>
                  <Image src={menu.img} height="80px" width="80px" />
                  <p className="mt-5 font-bold uppercase">Name</p>
                  <p className="mb-5">{menu.title}</p>
                  <p className="mt-5 font-bold uppercase">Price</p>
                  <p className="mb-5">{menu.price}</p>
                  <p className="mt-5 font-bold uppercase">Quantity</p>
                  <p className="mb-5">{menu.quantity}</p>
                  <p className="mt-5 font-bold uppercase">total</p>
                  <p className="mb-5">{menu.price * menu.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-40 mb-20 flex flex-col items-center  justify-center  ">
        <div className="flex flex-col items-center  justify-center bg-black p-5">
          <h4 className="text-white">Cart Total</h4>
          <h5 className="text-white">{cart.total}</h5>
          <h5 className="text-white">Discount</h5>
          <h5 className="text-white">0</h5>
          <button
            onClick={() => setCash(true)}
            className="mb-5 bg-white px-4 py-2 uppercase text-black"
          >
            Cash on delivery
          </button>
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
      <Footer />
    </>
  )
}
export default cart
