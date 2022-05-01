import ItemCaroselImage from "../../Items/ItemCaroselHorizantal"
import {  Scrollbar, A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
export default function Corsulhorizantal (props){
  const params = {

  }
    return (
        <>
        <section className="pt-0 pb-0 gen-section-padding-2 home-singal-silder">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="gen-banner-movies">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-desk_num={1} data-lap_num={1} data-tab_num={1} data-mob_num={1} data-mob_sm={1} data-autoplay="true" data-loop="true" data-margin={30}>
                   
                  <Swiper
                  {...params}
                autoplay
                modules={[ Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
              >     
                    {
                      props.data.map((item,i)=>{
                        return(
                          <>
                           <SwiperSlide key={`horizantal${item._id+i}`}>
                             <ItemCaroselImage  data={item}/>
                             </SwiperSlide>
                          </> 
                           
                          )
                      })
                    }
            </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}