export default function Index(){
    return (
    <>
    <div className="row">
            <div className="col-lg-12">
              <div className="pm-inner">
                <div className="gen-more-like">
                  <h5 className="gen-more-title">More Like This</h5>
                  <div className="row post-loadmore-wrapper">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="gen-carousel-movies-style-1 movie-grid style-1">
                        <div className="gen-movie-contain">
                          <div className="gen-movie-img">
                            <img src="images/background/asset-14.jpeg" alt="streamlab-image" />
                            <div className="gen-movie-add">
                              <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_class wp_ulike_is_not_liked">
                                  <button type="button" className="wp_ulike_btn wp_ulike_put_image" />
                                </div>
                              </div>
                              <ul className="menu bottomRight">
                                <li className="share top">
                                  <i className="fa fa-share-alt" />
                                  <ul className="submenu">
                                    <li><a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                                    </li>
                                    <li><a href="#" className="facebook"><i className="fab fa-instagram" /></a>
                                    </li>
                                    <li><a href="#" className="facebook"><i className="fab fa-twitter" /></a></li>
                                  </ul>
                                </li>
                              </ul>
                              <div className="movie-actions--link_add-to-playlist dropdown">
                                <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i className="fa fa-plus" /></a>
                                <div className="dropdown-menu mCustomScrollbar">
                                  <div className="mCustomScrollBox">
                                    <div className="mCSB_container">
                                      <a className="login-link" href="#">Sign in to add this
                                        movie to a
                                        playlist.</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="gen-movie-action">
                              <a href="tv-shows-home.html" className="gen-button">
                                <i className="fa fa-play" />
                              </a>
                            </div>
                          </div>
                          <div className="gen-info-contain">
                            <div className="gen-movie-info">
                              <h3><a href="tv-shows-home.html">Ghost of Sky</a></h3>
                            </div>
                            <div className="gen-movie-meta-holder">
                              <ul>
                                <li>1 Season</li>
                                <li>
                                  <a href="adventure.html"><span>Adventure</span></a>
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

            <div className="col-lg-12">
              <div className="gen-movie-action">
                <div className="gen-btn-container">
                  <a href="#" className="gen-button">
                    <span className="text">Load More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
    </>
    )
}