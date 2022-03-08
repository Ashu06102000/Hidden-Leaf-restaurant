import { useState } from 'react'

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('')
  const [address, setAddress] = useState('')

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-gray-300">
        <div className="2xl flex w-96 flex-col items-center justify-center rounded bg-white p-10">
          <h1 className="font-medium">You will play 12 after delivery</h1>
          <div className="flex w-full flex-col">
            <label className="mb-5">Name Surname</label>
            <input
              className="h-10 border-black"
              placeholder="name"
              type="text"
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <label className="mb-5">Phone Number</label>
            <input placeholder="+91 00000 11111 " type="text" />
          </div>
          <div className="flex w-full flex-col">
            <label className="mb-5">Address</label>
            <textarea
              placeholder="your address"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              rows="5"
            ></textarea>
          </div>
          <button onClick={handleClick}>Order</button>
        </div>
      </div>
    </>
  )
}
export default OrderDetail
