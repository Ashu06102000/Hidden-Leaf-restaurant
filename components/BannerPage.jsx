import  Styles  from "../styles/banner.module.css"

const BannerPage = () => {
  return (
    <>
      <div className={Styles.banner} >
        <div className="flex items-center justify-center h-screen w-full py-3   text-xs text-center leading-4 hover:translate-y-1 delay-500" >

          <div>
              <h1 className="text-white text-6xl sm:text-7xl md:text-8xl xl:text-8x1 uppercase">Welcome</h1>
              <h2 className="text-red-400 text-4xl sm:text-4xl md:text-6xl xl:text-7x1 ">Desserts and chocolates</h2>
          </div>
        </div>
      </div>
    </>
  )
}
export default BannerPage
