export default function Index(){
    return (
        <>
         <section className="gen-section-padding-2 pt-0 pb-0">
          <div className="container">
            <div className="home-singal-silder">
              <div className="gen-nav-movies gen-banner-movies">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider slider-for">
                      {/* Slider Items */}
                      <div className="slider-item" style={{background: 'url("images/background/asset-23.jpeg")'}}>
                        <div className="gen-slick-slider h-100">
                          <div className="gen-movie-contain h-100">
                            <div className="container h-100">
                              <div className="row align-items-center h-100">
                                <div className="col-lg-6">
                                  <div className="gen-movie-info">
                                    <h3>Love your life</h3>
                                    <p>Streamlab is a long established fact that a reader will be distracted by
                                      the readable content of a page when Streamlab at its layout Streamlab.
                                    </p>
                                  </div>
                                  <div className="gen-movie-action">
                                    <div className="gen-btn-container button-1">
                                      <a className="gen-button" href="#" tabIndex={0}>
                                        <i aria-hidden="true" className="ion ion-play" />
                                        <span className="text">Play Now</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>


                      
                      {/* Slider Items */}
                    </div>
                    <div className="slider slider-nav">
                     

                      <div className="slider-nav-contain">
                        <div className="gen-nav-img">
                          <img src="images/background/asset-4.jpeg" alt="steamlab-image" />
                        </div>
                        <div className="movie-info">
                          <h3>thieve the bank</h3>
                          <div className="gen-movie-meta-holder">
                            <ul>
                              <li>30mins</li>
                              <li>
                                <a href="action.html">
                                  Action </a>
                              </li>
                            </ul>
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