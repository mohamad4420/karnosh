/*
number sesons 
date data 
*/
import ItemEpisode from "../../Items/ItemEpisode";
const Episode =()=>
    <>
<div className="gen-season-holder">

                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link active show" data-toggle="tab" href="#season_0">Season 1</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#season_1">Season 2</a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="season_0" className="tab-pane active show">
                      <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num={4} data-lap_num={3} data-tab_num={2} data-mob_num={1} data-mob_sm={1} data-autoplay="false" data-loop="false" data-margin={30}>
                       
                          <ItemEpisode/>
                        
                      </div>
                    </div>
                    <div id="season_1" className="tab-pane">
                      <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num={4} data-lap_num={3} data-tab_num={2} data-mob_num={1} data-mob_sm={1} data-autoplay="false" data-loop="false" data-margin={30} data-rewing="false">
                        
                        <ItemEpisode/>
                      
                      </div>
                    </div>
                  </div>
                </div>

    </>

export default Episode;