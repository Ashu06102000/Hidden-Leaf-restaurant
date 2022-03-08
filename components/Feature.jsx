import Navbar from "./Navbar";
import BannerPage from '../components/BannerPage';
import Story from '../components/Story';
import Recipe from '../components/Recipe';
import Menu from '../components/Menu';

const Feature = ()=>{
    return(
        <>
        <Navbar/>
        <BannerPage />
        <Story />
        <Recipe />
        <Menu />
   
        </>
    )
};
export default Feature;