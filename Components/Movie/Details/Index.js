import MoreLikeThis from '../../MoreLikeThis/Index'

export default function Index (){
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
                      <iframe width="100%" height="550px" src="https://www.youtube.com/embed/LXb3EKWsInQ" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className="gen-single-movie-info">
                      <h2 className="gen-title">My Generation</h2>
                      <div className="gen-single-meta-holder">
                        <ul>
                          <li className="gen-sen-rating">TV-PG</li>
                          <li>
                            <i className="fas fa-eye">
                            </i>
                            <span>237 Views</span>
                          </li>
                        </ul>
                      </div>
                      <p>Streamlab is a long established fact that a reader will be distracted by the
                        readable
                        content of a page when Streamlab at its layout. The point of using Lorem
                        Streamlab
                        is that it has a more-or-less normal distribution of Streamlab as opposed
                        Streamlab.
                      </p>
                      <div className="gen-after-excerpt">
                        <div className="gen-extra-data">
                          <ul>
                            <li>
                              <span>Language :</span>
                              <span>English</span>
                            </li>
                            <li>
                              <span>Subtitles :</span>
                              <span>English</span>
                            </li>
                            <li>
                              <span>Audio Languages :</span>
                              <span>English</span>
                            </li>
                            <li><span>Genre :</span>
                              <span>
                                <a href="action.html">
                                  Action, </a>
                              </span>
                              <span>
                                <a href="adventure.html">
                                  Documentary </a>
                              </span>
                            </li>
                            <li><span>Run Time :</span>
                              <span>1hr 24 mins</span>
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
    )
}