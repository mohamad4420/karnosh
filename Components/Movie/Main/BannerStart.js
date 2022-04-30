export default function BannerStart(){
    return (
         <>
    
    <section className="pt-0 pb-0">
          <div className="container-fluid px-0">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="gen-banner-movies">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num={1} data-lap_num={1} data-tab_num={1} data-mob_num={1} data-mob_sm={1} data-autoplay="true" data-loop="true" data-margin={30}>
                    
                    <div className="item" style={{background: 'url("images/background/asset-9.jpeg")'}}>
                      <div className="gen-movie-contain h-100">
                        <div className="container h-100">
                          <div className="row align-items-center h-100">
                            <div className="col-xl-6">
                              <div className="gen-tag-line"><span /></div>
                              <div className="gen-movie-info">
                                <h3>Rebuneka the doll</h3>
                              </div>
                              <div className="gen-movie-meta-holder">
                                <ul>
                                  <li className="gen-sen-rating">
                                    <span>
                                      R </span>
                                  </li>
                                  <li>1hr 44 mins</li>
                                  <li> <img src="images/asset-2.png" alt="streamlab-image" />
                                    <span>
                                      0 </span>
                                  </li>
                                  <li>
                                    2018
                                  </li>
                                  <li>
                                    <a href="action.html"><span>Action</span></a>
                                  </li>
                                </ul>
                                <p>Streamlab is a long established fact that a reader will be
                                  distracted by the readable content of a page when Streamlab at
                                  its layout. The point of using Lorem Streamlab is that it has a
                                  more-or-less normal distribution of Streamlab as opposed
                                  Streamlab.</p>
                              </div>
                              <div className="gen-movie-action">
                                <div className="gen-btn-container button-1">
                                  <a href="single-movie.html" className="gen-button">
                                    <span className="text">Play Now</span>
                                  </a>
                                </div>
                                <div className="gen-btn-container button-2">
                                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="gen-button popup-youtube popup-vimeo popup-gmaps gen-button-link">
                                    <i aria-hidden="true" className="ion ion-play" /> <span className="text">Watch Trailer</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

         </>
    )
}