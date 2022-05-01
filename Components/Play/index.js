import { useState } from "react";
import Button from '@mui/material/Button';
import MoreLikeThis from '../../Components/MoreLikeThis/Index'
const Play = (props) => {
    console.log(props)
    const [link,setLink]=useState(props.data.servers[1])
    return (
         <>
         <section className="gen-section-padding-3 gen-single-movie">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="gen-single-movie-wrapper style-1">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="gen-video-holder">
                      <iframe width="100%" height="550px" src={link} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className="gen-single-movie-info"> 
                   <div className="mainPlayServers">
                        {
                            props.data.servers.map(item=>{
                                if(item.search('mycima')!=-1){
                                return(<></>)
                                }else
                                return(
                                    <>
                                    <Button className="buttonmainPlayServers" onClick={()=>{setLink(item)}} variant="outlined">{item.replace('https://',"").replace("ww.","").replace("www.","").split(".")[0]}</Button>
                                    </>
                              )
                            })
                        }   
                    </div>
                      <h2 className="gen-title">{props.data.name}</h2>
                      <div className="gen-single-meta-holder">
                        <ul>
                          <li className="gen-sen-rating">{props.data.year}</li>
                          <li>
                            <i className="fas fa-eye">
                            </i>
                            <span>237 Views</span>
                          </li>
                        </ul>
                      </div>
                      <p>{props.data.description}
                      </p>
                      <div className="gen-after-excerpt">
                        <div className="gen-extra-data">
                          <ul>
                            <li>
                              <span>quality :</span>
                              <span>{props.data.quality}</span>
                            </li>
                            <li>
                              <span>otherNames :</span>
                              <span>{props.data.otherNames}</span>
                            </li>
                            <li>
                              <span>rating :</span>
                              <span>{props.data.rating}</span>
                            </li>
                            <li><span>Genre :
                                
                            </span>
                            {props.data.genres.map(item=>{
                                return (
                                <a href="action.html" key={item}>
                                  {item}
                                </a> 
                                )
                            })}
                              <span>
                              </span>
                              <span>
                                <a href="adventure.html">
                                  Documentary </a>
                              </span>
                            </li>
                            <li><span>Run Time :</span>
                              <span>{props.data.duration}</span>
                            </li>
                            <li>
                              <span>Release Date :</span>
                              <span>14 Aug,2018</span>
                            </li>
                          </ul>
                        </div>
                        <div className="gen-socail-share">
                          <h4 className="align-self-center">Social Share :</h4>
                          <ul className="social-inner">
                            <li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                            </li>
                            <li><a href="#" className="facebook"><i className="fab fa-instagram" /></a>
                            </li>
                            <li><a href="#" className="facebook"><i className="fab fa-twitter" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MoreLikeThis/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
         </> 
      );
}
 
export default Play;