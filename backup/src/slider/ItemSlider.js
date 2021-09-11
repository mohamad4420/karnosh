import React, { Component } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import axios from 'axios'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const PlayCircleOutlineIcon = dynamic(() => import('@material-ui/icons/PlayCircleOutline'))
const ThumbDownAltIcon = dynamic(() => import('@material-ui/icons/ThumbDownAlt'))
const ThumbUpIcon = dynamic(() => import('@material-ui/icons/ThumbUp'))
const AddCircleOutlineIcon = dynamic(() => import('@material-ui/icons/AddCircleOutline'))
const PlayArrowRoundedIcon = dynamic(() => import('@material-ui/icons/PlayArrowRounded'))
const AddRoundedIcon = dynamic(() => import('@material-ui/icons/AddRounded'))


class itemSlider extends Component{
    constructor(props){
        super(props);
        this.state={
           show:false,
           traler:null,
           erorr:false,
           test:true,
           Mobile:true,
           classShow:"",
           date:"1"
        }
        this.onError = this.onError.bind(this);
        this.show = this.show.bind(this);
        this.route = this.route.bind(this);
      }
      route=()=>{
        router.push('/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-')), undefined, { shallow: true })
      }
      show=()=>{
        var th =this;
        this.setState({test:false})
        setTimeout(function(){ 
            if(!th.state.test)
            th.setState({show:true})
          }, 50); 
      

      }
      componentDidMount(){
        var d = new Date();
        var mydate = d.getTime();
        
        var startTime = new Date(this.props.data.ubdate);
        startTime =   new Date( startTime.getTime());
        const diffTime = Math.abs(mydate-startTime.getTime());
        const diffm =Math.ceil( diffTime / (1000 * 60  ));
        const diffh =Math.ceil( diffTime / (1000 * 60 * 60 ));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if(diffDays == 1 && diffh >= 24 ){
          this.setState({date: "منذ يوم "})
        }else if(diffh == 1 && diffDays == 1 && diffm==1){
          this.setState({date:"منذ دقيقه"})
        }else if(diffh == 1 && diffDays == 1 && diffm==2){
          this.setState({date:"منذ دقيقتان"})
        }else if(diffh == 1 && diffDays == 1 ){
          this.setState({date:" منذ "+diffm +"دقيقه"})
        }else if(diffh != 1 && diffDays == 1 ){
          this.setState({date:" منذ "+diffh +"ساعه"})
        }
        else if(diffDays == 2 ){
          this.setState({date: "منذ يومان"})
        }else if(diffDays >= 2 && diffDays < 7 ){
          this.setState({date: "منذ"+diffDays+"ايام"})
        }
        else if(diffDays >= 7 && diffDays < 14 ){
          this.setState({date: "منذ اسبوع"})
        }else if(diffDays >= 14 && diffDays < 21 ){
          this.setState({date: "منذ اسبوعان"})
        }else if(diffDays >= 14 && diffDays < 28 ){
          this.setState({date: "منذ 3اسابيع"})
        }else if(diffDays >= 28 && diffDays < 60 ){
          this.setState({date: "منذ شهر"})
        }else if(diffDays >= 60 && diffDays < 90 ){
          this.setState({date: "منذ شهران"})
        }else if(diffDays >= 90  ){
          this.setState({date: "منذ"+Math.ceil(diffDays / (30))+"شهر"})
        }else{
          this.setState({date: "eroor"})
        }
    
         if(window.innerWidth>500)
        this.setState({Mobile:false})
      else
        this.setState({Mobile:true})
        window.addEventListener('resize',()=>{
            if(window.innerWidth>500)
            this.setState({Mobile:false})
          else
            this.setState({Mobile:true})
        })


      }
      onError=()=>{
          this.setState({erorr:true})
     
     }

    render(){
      let Show;
      let Player;
      let Mobile;
      let Ser;
      let finl;
      if(this.props.data.type=='anime' && this.state.date!="1"){
        if(this.props.data.date.indexOf("?")==-1){
          finl=
          <>
          <div className="FinalSlider">الاخيره</div>
          </>
        }
        
        Ser=<>
                <div className="NoSErSlider">الحلقه {this.props.data.episodes}</div>
                <div className="dateSlider"> {this.state.date}</div>
                {finl}
        </>
      }
 
   if(this.props.data.traler !=null  && !this.state.erorr){
    Player =
    <>
    <Link href={'/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-'))}>
    <a>
    <div className="overTraler"></div>
    </a>
    </Link>

    <ReactPlayer 
    config={{
      youtube: {
        playerVars: {      
          showinfo: 1,
          enablejsapi:1,
          rel:0,
          origin:'https://www.karnosh.ml/' }
      }
    }}
    onError	={this.onError}
    className="videoT" 
    width="100%" 
    height="57%"
    volume={0.1}
    playing={true}
    url={"https://www.youtube.com/embed/"+this.props.data.traler}
    playsinline={true}
    controls={false}
    ></ReactPlayer> 

    </>
   
   }else{
    Player =
    <>
        <Link href={'/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-'))}>
    <a>
    <div className="overTraler"></div>
    </a>
    </Link>
    <div className="NoTralerImage">
   <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
   </div>
    </>  
   }
      if(this.state.show && !this.state.Mobile){
        Show=
        <>
                    <div className="moreOther">
                   
                     {
                         Player
                     }
                     
                    <div className="nameSearchMovie">{this.props.data.name}</div>
                   <div className="disSliderMovie">{this.props.data.Description+"|"+this.props.data.name}</div>
                   <div className="sitingsSlider">
        
                       <Link href={'/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-'))}>
                         <a>
                         <button className="bottonSlider" type="button">
                        <PlayArrowRoundedIcon className="btn_It"/>
                   </button>
                        </a>
                       </Link>
                       <button className="bottonSlider" aria-label="إضافة إلى قائمتي" type="button">
                       <ThumbUpIcon className="btn_It"/>
                   </button>
                   <button className="bottonSlider" aria-label="إضافة إلى قائمتي"  type="button">
                   <ThumbDownAltIcon className="btn_It"/>
                   </button>
                   <button className="bottonSlider" aria-label="إضافة إلى قائمتي" type="button">
                   <AddRoundedIcon className="btn_It"/>
                   </button>
                 
                  </div>
                  </div>
                
        </>
      }
        return(
            <>
            <div className={'ItemSwiper'} onMouseEnter={this.show} onMouseLeave={()=>{this.setState({show:false,test:true})}}>
                <Link href={'/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-'))}>
                  <a>
                  <h2 className="NameSliderMain " style={{backgroundImage:this.props.data.poster}}>{"مترجم "+this.props.data.name}</h2>
                </a>
                </Link>
                <p className="infoSliderMain">{this.props.data.Description+"مترجم "+this.props.data.name}</p>

                {Ser}
                
                {Show}

            </div>
            
            </>
        )
    }
}
export default itemSlider


