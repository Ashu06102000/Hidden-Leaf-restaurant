import Navbar from '../../components/Navbar'
import axios from 'axios'

const orders = ({ order }) => {
  return (
    <>
      <Navbar />
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="flex  items-center justify-center text-center ">
          <div>
            <p className="mt-5 font-bold uppercase">Order ID</p>
            <p className="mb-5">{order._id}</p>
            <p className="mt-5 font-bold uppercase">Customer</p>
            <p className="mb-5">{order.customer}</p>
            <p className="mt-5 font-bold uppercase">Address</p>
            <p className="mb-5">{order.address}</p>
          </div>
        </div>
        <div className="mb-10 flex w-2/4 flex-col items-center justify-center bg-black">
          <h4 className="text-white">Cart Total : {order.total}</h4>

          <h5 className="text-white">Discount</h5>
          <h5 className="text-white">Total : {order.total}</h5>
          <button
            disabled
            className="mb-5 bg-green-600 px-4 py-2 uppercase text-black"
          >
            Order Placed
          </button>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
  return {
    props: { order: res.data },
  }
}
export default orders
