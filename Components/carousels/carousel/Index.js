import ItemMovie from '../../Items/ItemMovie';
import { Navigation, FreeMode } from 'swiper';
import Link from 'next/Link'
import { Swiper, SwiperSlide } from 'swiper/react';


import Styles from '../../../styles/curouse.module.scss'
export default function Index (props){
  const params = {
    dir:"rtl"
  }
    return (
        <>
           <div className={Styles.info}>
            <Link href={`/more/${props.more}`}>
            <a>
            <div className={Styles.More}>
               المزيد من هذا
             </div>
            </a>
            </Link>
   

             <div className={Styles.Name} >
             {props.name}
             </div>
           </div>
          <Swiper
                   style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                
                  }}
                modules={[Navigation,FreeMode]}
                freeMode={true}
                breakpoints={{
                  // when window width is >= 640px
                  1380: {
                    spaceBetween:120,
                    slidesPerView:9
                  },
                  // when window width is >= 768px
                  768: {
                    spaceBetween:80,
                    slidesPerView:6
                  },
                  0: {
                    spaceBetween:50,
                    slidesPerView:3
                  },
                }}
                navigation
            {...params}
              >
              
                      {
                      props.data.map((item,i)=>{
                        return(
                           <SwiperSlide key={`SwiperSlide${i+item._id+i}`}>
                          <ItemMovie data={item} />
                           </SwiperSlide>
                        )
                        
                      })
                    }
                 
                  
             </Swiper>
                   

    
        </>
    )
}