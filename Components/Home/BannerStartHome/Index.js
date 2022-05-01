import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y,EffectFade } from 'swiper';
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
export default function Index(props){
    return ( 
    <>
            <section className="pt-0 pb-0">
          <div className="container-fluid px-0">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="gen-banner-movies banner-style-2">
                <Swiper
                autoplay
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
           
              >
                {
                     props.data.map(item=>{
                      return(
                         <SwiperSlide key={`swiperSliders${item._id}`}>
                        <div className="item" key={item._id+"BannerStartHome"}  >
                        {item.galary.search('http')!=-1?<Image className='image-op' src={item.galary} alt={item.name} layout="fill"/>:<></>}
                      <div className="gen-movie-contain-style-2 h-100">
                        <div className="container h-100">
                          <div className="row flex-row-reverse align-items-center h-100">
                            <div className="col-xl-6">
                              <div className="gen-front-image">
                               
                              
                                <a href={`https://www.youtube.com/watch?v=${item.traler}`} className="playBut popup-youtube popup-vimeo popup-gmaps">
                                  {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  */}
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px" height="213.7px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                    <polygon className="triangle" id="XMLID_17_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} points="
                                                            73.5,62.5 148.5,105.8 73.5,149.1 " />
                                    <circle className="circle" id="XMLID_18_" fill="none" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} cx="106.8" cy="106.8" r="103.3">
                                    </circle>
                                  </svg>
                                  <span>Watch Trailer</span>
                                </a>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="gen-tag-line"><span>Most Viewed</span></div>
                              <div className="gen-movie-info">
                                <h3>{item.name}</h3>
                              </div>
                              <div className="gen-movie-meta-holder">
                                <ul className="gen-meta-after-title">
                                  <li className="gen-sen-rating">
                                    <span>
                                      12A</span>
                                  </li>
                                  <li> <img src="images/asset-2.png" alt="rating-image" />
                                    <span>
                                      {item.rating} </span>
                                  </li>
                                </ul>
                                <p>{item.description}
                                </p>
                                <div className="gen-meta-info">
                                  <ul className="gen-meta-after-excerpt">
                                    <li>
                                      <strong>quality :</strong>
                                      {item.quality}
                                    </li>
                                    <li>
                                      <strong>Genre :</strong>
                                         {
                                           item.genres.map((gen,i)=>{
                                             return(
                                                   <span key={i+gen+item._id}>
                                                <a href="action.html">
                                                   {i>0?" . ":""}{gen}</a>
                                              </span>
                                             )
                                           })
                                         }                                                
                                    </li>
                                    <li>
                                      <strong>country :</strong>
                                      {item.country.map((c,i)=>{
                                        return(
                                            <span key={`contry${c+i}`}>
                                        <a href="#">
                                        {i>0?" . ":""}{c} </a>
                                      </span>
                                        )
                                      })}
                                    
                                   
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="gen-movie-action">
                                <div className="gen-btn-container">
                                  <Link href={`/play/${item._id}`}>
                                  <a  className="gen-button .gen-button-dark">
                                    <i aria-hidden="true" className="fas fa-play" /> <span className="text">Play
                                      Now</span>
                                  </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                        
                    </SwiperSlide>
                        )
                     })
                   }
              </Swiper>
             

            
                </div>
              </div>
            </div>
          </div>
        </section>
    </> 
    )
}