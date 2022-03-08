import Link from 'next/link'
import Image from 'next/image'
const Full = ({ dessert }) => {
  return (
    <>
      <div id="menu" className="mx-6 mb-56">
        <div>
          <Link href={`/pageMenu/${dessert._id}`}>
            <div className="cursor-pointer border border-rose-400 bg-rose-400 pb-10">
              <Image
                src={dessert.img}
                height="300px"
                width="350px"
                className="scale-auto transform transition duration-500  hover:scale-110"
              />
              <div className="mt-5 flex flex-col items-center justify-center">
                <p className="font-bold">{dessert.title}</p>
                <p>₹{dessert.price}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Full
