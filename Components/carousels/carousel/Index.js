import ItemMovie from '../../Items/ItemMovie';
import { Navigation, Pagination, Scrollbar, A11y,EffectCards } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Styles from '../../../styles/curouse.module.scss'
export default function Index (props){
  console.log(props.data)
    return (
        <>
           <div className={Styles.info}>
           <div className={Styles.More}>
               المزيد من هذا
             </div>
             <div className={Styles.Name} >
             افلام مترجمه 
             </div>
           </div>
          <Swiper
                 freeMode={true}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={9}
                navigation
        
              >
              
                      {
                      props.data.map((item,i)=>{
                        return(
                           <SwiperSlide >
                          <ItemMovie data={item}/>
                           </SwiperSlide>
                        )
                        
                      })
                    }
                 
                  
             </Swiper>
                   

    
        </>
    )
}