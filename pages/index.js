import Head from 'next/head'
import Navbar from '../components/Navbar'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import FullMenu from '../components/fullMenu'
import Visit from '../components/Visit'
import axios from 'axios'
import { LocationMarkerIcon, PhoneIcon } from "@heroicons/react/outline";
export default function Home({dessertList}) {
  return (
    <>
      <div className=' scroll-smooth'>
        <Head>
          <title>Hedden-Leaf Restaurant</title>
          <meta name="description" content="serving you is our honor" />
        </Head>
        <Navbar />
        <Feature />
        <FullMenu dessertList={dessertList} />
        <div className="bg-black flex-col sm:flex-row items-center flex justify-around  mb-10">
            <div>
                <h2 className="text-white text-5xl text-center pb-4">
                    Hidden-Leaf Deserts
                </h2>
            </div>
            <div className="flex  items-center">
                <LocationMarkerIcon className=" cursor-pointer h-8 w-8 text-white"/>
                <p className=" text-white">Dhule | India</p>
                <div className="flex">
                <PhoneIcon className="h-5 w-5 ml-5 mr-5 text-white" />
                <p className="text-white">+06 0606 2000</p>
                </div>
              
            </div>
        </div>
        <p className="flex justify-center pb-5">copyright©2022 | yash thakur</p>
        <Visit/>
     
      </div>
    </>
  )
};

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/menus");
  return{
    props:{
      dessertList:res.data,
    }
  }
}

