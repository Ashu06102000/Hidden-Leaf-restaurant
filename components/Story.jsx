import Image from 'next/image'
import Styles from '../styles/story.module.css'
import story from '../image/story.jpg'
const Story = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-20 mb-20 px-5 justify-center items-center">
        <div className='flex flex-col justify-center items-center text-center px-8 md:w-2/4'>
          <h1 className={Styles.curve} >find out our story</h1>
          <p className='pt-5 pb-10' >Our shop is located near gurudwara,dhule . Our shop also known as dessert shop , open since 50 years ago , we serve happily to our customers . delightful desserts , all coco related items and other stuffs .....walk in / call / order online </p>
        </div>
        <div className='w-fit px-4 md:px-0 md:w-2/4'>
        <Image src={story} />
        </div>
      </div>
    </>
  )
}

export default Story
