import ItemHorizantal from "../Items/itemHorizantal";
import Styles from '../../styles/itemHorizantal.module.scss'
const index = (props) => {
    return ( 

        <div>
        {/* breadcrumb */}
        <div className="gen-breadcrumb" style={{backgroundImage: 'url("/images/background/asset-25.jpeg")'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav aria-label="breadcrumb">
                  <div className="gen-breadcrumb-title">
                    <h1>
                      TV Shows
                    </h1>
                  </div>
                  <div className="gen-breadcrumb-container">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html"><i className="fas fa-home mr-2" />Home</a></li>
                      <li className="breadcrumb-item active">TV Show</li>
                    </ol>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb */}
        {/* Section-1 Start */}
        <section className="gen-section-padding-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="gen-style-1">
                  <div className="row">
                      {
                        props.data.map(item => {
                          return(
                            <div className={Styles.main_item}>
                             <ItemHorizantal key={item._id+"moreItem"} data={item}/>
                            </div>
                          )
                        })
                      }
                     
                 
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="gen-load-more-button">
                  <div className="gen-btn-container">
                    <a className="gen-button gen-button-loadmore" href="#">
                      <span className="button-text">Load More</span>
                      <span className="loadmore-icon" style={{display: 'none'}}><i className="fa fa-spinner fa-spin" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

     );
}
 
export default index;