import ItemCaroselImage from "../../Items/ItemCaroselHorizantal"
export default function Index (props){
  console.log(props);
    return (
        <>
        <section className="pt-0 pb-0 gen-section-padding-2 home-singal-silder">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="gen-banner-movies">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-desk_num={1} data-lap_num={1} data-tab_num={1} data-mob_num={1} data-mob_sm={1} data-autoplay="true" data-loop="true" data-margin={30}>
                    {
                      props.data.map(item=>{
                        return(
                          <>
                             <ItemCaroselImage key={`horizantal${item._id}`} data={item}/>
                          </>  
                          )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}