import CarouselVartical from "../carousels/Carosel-vartical/Index"
import CarouselHorizantal from "../carousels/carousel-Horizantal/Index"
import BannerStartHome from './BannerStartHome/Index'
import Carosels from '../carousels/carousel/Index'


const Index = (props) => {
  return ( 
  <>
         <BannerStartHome  data={props.data.Main}/>
         <div className="space"></div>
         {props.data.Mt!=undefined?<Carosels name="افلام مترجمه" data={props.data.Mt}/>:""} 
         {props.data.Ar!=undefined?<Carosels name="افلام عربيه" data={props.data.Ar}/>:""} 
          <CarouselVartical/>
          <div className="space"></div>
          {props.data.Hn!=undefined?<Carosels name="افلام هنديه" data={props.data.Hn}/>:""} 
          {props.data.Tr!=undefined?<Carosels name="افلام تركيه" data={props.data.Tr}/>:""} 
          <CarouselHorizantal data={props.data.horizantal}/>
          <div className="space"></div>
          {props.data.Wth!=undefined?<Carosels name="افلام وثائقيه" data={props.data.Wth}/>:""} 
          {props.data.Md!=undefined?<Carosels name="افلام مدبلجه" data={props.data.Md}/>:""} 

  </>
   );
}
 
export default Index;


