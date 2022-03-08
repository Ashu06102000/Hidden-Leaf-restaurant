import Footer from './Footer'
import Navbar from './Navbar'
import Full from './Full'

const FullMenu = ({dessertList}) => {
  return (
    <>
      <Navbar />
      <h1 className="mt-5 mb-5 text-center text-4xl  text-rose-400" id='#menulist'>
        Taste Our Menu
      </h1>
      <div className="flex flex-wrap justify-center items-center align-middle">
       {
         dessertList.map((dessert)=>(
           <Full key={dessert._id} dessert={dessert} />
         ))
       }
      </div>
      <p className="flex justify-center pb-5">copyright©2022 | yash thakur</p>
    </>
  )
}
export default FullMenu;




