import Image from 'next/image'
import Link from 'next/link'
export default  function ItemCaroselHorizantal (props){
    return (
        <>
              <div className="item">
                    {props.data.galary.search('http')!=-1?<Image className='image-op' src={props.data.galary} alt={props.data.galary} layout="fill"/>:<></>}
                      <div className="gen-movie-contain h-100">
                        <div className="container h-100">
                          <div className="row align-items-center h-100">
                            <div className="col-xl-6">
                              <div className="gen-tag-line"><span /></div>
                              <div className="gen-movie-info">
                                <h3>{props.data.name}</h3>
                              </div>
                              <div className="gen-movie-meta-holder">
                                <ul>
                                  <li className="gen-sen-rating">
                                    <span>
                                      {props.data.category} </span>
                                  </li>
                                  <li>{props.data.time}</li>
                                  <li>  <img src="images/asset-2.png" alt="streamlab-image" />
                                    <span>
                                      {props.data.rating} </span>
                                  </li>
                                  <li>
                                    {props.data.year}
                                  </li>
                                  <li>
                                    <a href="action.html"><span>{props.data.genres[0]}</span></a>
                                  </li>
                                </ul>
                                <p>{props.data.description}</p>
                              </div>
                              <div className="gen-movie-action">
                                <div className="gen-btn-container button-1">
                                <Link href={`/play/${props.data._id}`}>
                                  <a  className="gen-button">
                                    <i aria-hidden="true" className="ion ion-play" /> <span className="text">Play now</span>
                                  </a>
                                </Link>
                                </div>
                                <div className="gen-btn-container button-2">
                                  <a href={"https://www.youtube.com/watch?v="+props.data.traler} className="gen-button popup-youtube popup-vimeo popup-gmaps gen-button-link">
                                    <span className="text">Watch Trailer</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
        )
}