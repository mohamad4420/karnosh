import Image from 'next/image'
import ReactPlayer from 'react-player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import axios from 'axios'
import Link from 'next/link'
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { Component } from 'react';
import Related from './Related'
export default class index extends Component{

    constructor(props){
        super(props);
        this.state={
            speack:false,
            nameSpeack:"",
            volume:0,
            Mobile:undefined,
            play:false,
            pic:this.props.data.poster.replace ('.jpg',process.env.imgReplacePoster),
            picShow:true,
            soundShow:"hide",
            data:"",
            genres:"",
            traler:"",
            link:"",
            related:"",
         
        }
        this.onError = this.onError.bind(this);
        this.sound = this.sound.bind(this);
        this.share = this.share.bind(this);
      }

    sound=()=>{
   if(this.state.speack){
       this.setState({speack:false,volume:0})
   }
   else{
    this.setState({speack:true,volume:0.5}) 
   }
 }


 share(){
  let name = this.props.data.name;
  let url =  'https://karnosh.ml/Watch/'+this.props.data._id;
  if(navigator.share){
  navigator.share({
      title:name,
      text: " شاهد على كرنوش \n"+name+" فلم : "+"\n"+this.props.data.Description+" شاهد على كرنوش ",
      url:url
   })
  
      }
      else{
  console.log("not")
      }
  }



  
    onError=()=>{
       axios.post('https://karnoshapi.herokuapp.com/movie/filme-traler',{"q":this.props.data.linkTraler})
      .then((res)=>{
        this.setState({traler:res.data.link.hd,play:true})    
          axios.put('https://karnoshapi.herokuapp.com/movie/updateTraler',{"id":this.state.data._id,"traler":res.data.link});
      })
      .catch((err)=>{
        console.log(err);
      })
      }

 


        componentDidMount(){
         
        axios.post('https://karnoshapi.herokuapp.com/movie/filme-traler',{"q":this.props.data.linkTraler})
        .then((res)=>{
          this.setState({traler:res.data.link.hd,play:true})    
            axios.put('https://karnoshapi.herokuapp.com/movie/updateTraler',{"id":this.state.data._id,"traler":res.data.link});
        })
        .catch((err)=>{
          console.log(err);
        })
       



        
        if(window.innerWidth>500){
            this.setState({Mobile:false,pic:this.props.data.Galary})
        }
          else{
            this.setState({Mobile:true,pic:this.props.data.poster.replace ('.jpg','._V1_UX375_CR0,0,375,555_AL_.jpg')})
        }  




        
        window.addEventListener('resize',()=>{
            if(window.innerWidth>500){
                this.setState({Mobile:false,pic:this.props.data.Galary})
    
            }
              else{
                this.setState({Mobile:true,pic:this.props.data.poster})
            }          
        
        })
        



        window.addEventListener("scroll",async function(){
            const {scrollTop , scrollHeight,clientHeight}= document.documentElement;
            var hight = scrollHeight-clientHeight;
            var myhight = scrollTop;
            if(myhight>hight/4){
              th.setState({play:false})

            }
            else{
              th.setState({play:true})
            }
           })
        

// start convert generess


var th = this;
var g2 = Array();
var genres = Array();
var g1 = ["Action","Adventure","Animation","Biography","Comedy","Crime","Drama","Family","Fantasy","Film-Noir","Horror","Music","Musical","Romance","Sci-Fi","Sport","Thriller","War","Western"]
g2.push('أكشن');g2.push('مغامره');g2.push('الرسوم المتحركه');g2.push('السيره الذاتيه');g2.push('الكوميديا');g2.push('الجريمه');g2.push('الدراما');g2.push('عائلي');g2.push('الخيال');g2.push('فيلم أسود');g2.push('الرعب');g2.push('الموسيقي');g2.push('الموسيقيه');g2.push('الرومانسيه');g2.push('الخيال العلمي');g2.push('الرياضه');g2.push('الاثاره');g2.push('حربي');g2.push('Western');
for(var i = 0;i<this.props.data.genres.length;i++){
var index = g1.indexOf(this.props.data.genres[i]);
genres[i]=g2[index]
}
th.setState({
    genres:genres
})
// end convert generess


setTimeout(function(){
th.setState({play:true})
if(window.innerWidth>500)
th.setState({picShow:false,soundShow:""})

  }, 5000);
}

    render(){

        let speach ;
        let video;
        let imagee;
        let galary;
        let imgeMobFix;
        if(this.state.Mobile){
          imgeMobFix=
          <>
           <div className="imageMobile">
            <Image  src={this.props.data.poster}   layout='fill' title={this.props.data.name} alt={this.props.data.name}/>
         </div>
         <div className="imageMobileB">
            <Image src={this.props.data.poster}  quality={20} layout='fill' title={this.props.data.name} alt={this.props.data.name}/>
         </div>
          </>
        }else{
          imgeMobFix=
          <>
           <div className="imageMobileA">
            <Image  src={this.state.pic}   layout='fill' title={this.props.data.name} alt={this.props.data.name}/>
         </div>
          </>
        }
       
        if(this.props.data.linkTraler!=null){
         galary=
         <>
         {imgeMobFix}
         </>
        }
        else{
          galary=
          <>
             <Image src={this.props.data.poster}   layout='fill' title={this.props.data.name} alt={this.props.data.name}/>
          </>
        }
       
        if(this.state.Mobile==false &&  this.props.data.linkTraler!=null){
              video=
            <>
            <ReactPlayer 
            onError	={this.onError}
            url={this.state.traler}
            width="100%"
            height=""
            loop
            volume={this.state.volume}
            playing={this.state.play}
            className="gls"
        />
        <div className="hoverbootom"></div>
            </>
        }

      
        if(this.state.speack){
            speach=<><VolumeUpIcon  style={{color:"white"}}/></>
        }
        else{
            speach=<><VolumeOffIcon style={{color:"white"}}/></> 
        }


        
        return(
            <>
            <div>
            <div className="mainMost">

           {galary}
           {video}
           
          <div className={"speackerMost"+this.state.soundShow} onClick={this.sound}>{speach}</div>
          <div className="blurMost"></div>
          <div className="contaneMainOption" >
          <div className="nameMostFilm">{this.props.data.name}</div>
          <div className="generesAnd_">(فلم) <span>{this.state.genres.toString()}</span></div>
          <div className="optionMost">
          <Link href={'/play/'+this.props.data._id} >
             <a>
         <div className="playMostn"><PlayArrowIcon/>تشغيل الأن</div>
          </a>
          </Link>
          <div className="addMostn"><AddIcon/><span>اضافه لقائمتي</span></div>

         <div className="shareMost" onClick={this.share}><ShareIcon/></div>
         </div>
         <div className="discriptionMost">{this.props.data.Description}</div>
        <div className="herosMost"><span>النجوم</span>  : تايسا فارميجا، جيسيكا لانج، إيفان بيترز</div>
        <div className="timeMost"><span>مده العرض</span>  : {this.props.data.time}</div>
        </div>
        </div>

          
   <Related 
   id={this.props.data._id}
   />

  </div>
            </>
        )
    }
}







