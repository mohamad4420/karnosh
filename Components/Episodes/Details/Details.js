/* 
data neded
Name , number seasons , from to , generess , watched , discription , more
*/
import Episode from './Episode' 
import MoreLikeThis from '../../MoreLikeThis/Index' 
const Details = () =>
<>
<section className="position-relative gen-section-padding-3">
        <div className="tv-single-background">
          <img src="images/background/asset-15.jpeg" alt="stream-lab-image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gen-tv-show-wrapper style-1">
                <div className="gen-tv-show-top">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="gentech-tv-show-img-holder">
                        <img src="images/background/asset-15.jpeg" alt="stream-lab-image" />
                      </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                      <div className="gen-single-tv-show-info">
                        <h2 className="gen-title">Love In 21st</h2>
                        <div className="gen-single-meta-holder">
                          <ul>
                            <li>2 Seasons</li>
                            <li>9 Episodes</li>
                            <li>2015 to 2016</li>
                            <li>
                              <a href="#"><span>Action</span></a>
                            </li>
                            <li>
                              <i className="fas fa-eye">
                              </i>
                              <span>5.5K Views</span>
                            </li>
                          </ul>
                        </div>
                        <p>Streamlab is a long established fact that a reader will be distracted by the
                          readable content of a page when Streamlab at its layout. The point of using
                          Lorem Streamlab is that it has a more-or-less normal distribution of
                          Streamlab
                          as opposed Streamlab.</p>
                        <div className="gen-socail-share mt-0">
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
                </div>
                <Episode/>
              </div>
            </div>
          </div>
         <MoreLikeThis/>
        </div>
      </section>
</>


export default Details;