import Slider from '../../carousels/carousel/Index'
import CarouselImages from '../../carousels/carousel-images/Index'
import BannerStart from './BannerStart'
export default function Index (){
    return (
        <>
        <BannerStart/>
        <Slider name="Most Viewed"/>
        <Slider name="Top Movies"/>
         <CarouselImages/>
         <Slider name="Powerful Crime Thrillers"/>
        </>
    )
}