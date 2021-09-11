import React,{Component} from 'react';
import {  MenuItem, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import SighIn from './signin'
import Notification from './Notification'
import classes from '../../styles/menu.module.scss'
import Mobilee from './MobileMenu'
import NotificationMobile from './NotificationMobile'
import Link from 'next/link'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
export default class Menu extends Component{


  constructor (props) {
   
    super(props)
    this.state = {
        Mobile:0,
        data:[],
      style:"transparent",
      MobileStyle:"transparent",
      openSearch:false,
      opacity:1,
      background:"#000000de",
      sign:false
  }
  this.openSearch = this.openSearch.bind(this);
  this.closeSearch = this.closeSearch.bind(this);
  this.keyPress = this.keyPress.bind(this);
}

keyPress=(event)=>{
  if(event.target.value.length!=0){

  axios.post('https://karnoshapi.herokuapp.com/movie/search',{"name":event.target.value})
  .then((res)=>{
    this.setState({data:res.data,background:"#000000"})
  })
  .catch((err)=>{
    console.log(err)
  })
}
else{
  this.setState({data:"",background:"#000000de"})
}
 }


openSearch =()=>{
this.setState({openSearch:true})
}
closeSearch =()=>{

  this.setState({opacity:0})
  setTimeout(()=>{
    this.setState({opacity:1,openSearch:false,data:""})
  },400)
  }

componentDidMount(){
  try{
    var da= localStorage.getItem('da');
    da=JSON.parse(da);
    if(da!=null){
      this.setState({sign:true})
   
    }
    else{
      this.setState({sign:false})
    }
     }
   catch(err){
    this.setState({sign:false})
   }
  var th = this;
   if(window.innerWidth>750)
   this.setState({Mobile:1})
 else
   this.setState({Mobile:2})

   window.addEventListener("scroll",async function(){
    const {scrollTop , scrollHeight,clientHeight}= document.documentElement;
    var hight = scrollHeight-clientHeight;
    var myhight = scrollTop;
    if(myhight>hight/8 && window.innerWidth>500){
      th.setState({style:"#270909"})
    }
    else if(myhight>hight/8 ){
      th.setState({MobileStyle:"#270909"})
    }
    else{
      th.setState({style:"transparent"})
      th.setState({MobileStyle:"transparent"})
    }
   })



  window.addEventListener('resize',()=>{

    if(window.innerWidth>750)
    this.setState({Mobile:1})
  else
    this.setState({Mobile:2})
  }
  );


}


   render(){
let Mobile ;
let Noti;
let Sign;
// open search and under contane A some code  Y search dsine <3 A
let Search;
let Sesult;
if(this.state.data.length!=0 ){
  Sesult=
  <>
{
  
this.state.data.map((data,i) =>
  <>
          <Link href={'/Watch/'+encodeURI(data.name.replace(/ /g,'-'))} >
             <a>
             <div className="prodectMain" onClick={()=>{this.setState({openSearch:false})}}>
               <div className="spasificationSearch">
                 <div className="nameSearchMovie">{data.name}</div>
                 <div className="discriptionSearchMovie">{data.Description}</div>
               </div>     
               <Image src={data.poster.search('amazon')==-1?data.poster:data.poster.replace('.jpg','._V1_UX380_CR0,0,380,542_AL_.jpg')}  quality={10} layout='fill' />
             </div>
             </a>
          </Link>


  
  </>
  
  
  )
  
  
  }
   
  </>
}
if(this.state.openSearch){
  Search=
  <>
         <div className="mainSearch" style={{opacity:this.state.opacity,background:this.state.background}}>
          
             <div className="mainSearchTop">
               <div className="canseleSearch" onClick={this.closeSearch}>ألغاء</div>

               <input autoComplete="off" className="inputSearch" type="text" placeholder="افلام مسلاسلات و انمي" name="fname" onKeyUp={this.keyPress}/>
               <label className="lapleSearch"><SearchIcon style={{fontSize:"80%"}}/></label>
             </div>
             <div className="mainSearchScroll">
              {Sesult}
          
            </div>

           </div>
  </>
}
// end search and under contane A some code  Y search dsine <3 A
if(this.state.Mobile===1 || this.state.sign){
  Sign=<><SighIn/></>
}

if(this.state.Mobile===1){

Mobile=
  <>           
              <Link href="/MyList">
                <a>
               <Button  style={{ color:'#e0f2f1',fontSize:'22px' }} className="IconButton" aria-label="mylest">قائمتي </Button>
               </a>
               </Link>
               <Link href="/Anime">
                <a>
                <Button style={{ color:'#e0f2f1',fontSize:'22px' }} className={classes.Slides} aria-label="anime" >انمي</Button>
                </a>
               </Link>
               <Link href="/Series">
                <a>
                <Button style={{ color:'#e0f2f1',fontSize:'22px' }} className={classes.Slides} aria-label="seris" >مسلسلات </Button>
                </a>
               </Link>
               <Link href="/Movie">
                <a>
                <Button style={{ color:'#e0f2f1',fontSize:'22px',marginRight:'40px' }} className={classes.Slides}  aria-label="movie">افلام </Button>
                </a>
               </Link>

                <Link href="/">
                <a>
                <div style={{maxHeight:60}}  >
                <p style={{ color:'#ffffff',fontSize:20,marginRight:"10px" }} >كرنوش</p>
                </div>
                </a>
                </Link>
                
                <Image className="spinner" alt="spiiner" src="/favicon.gif" width={80}  height={40} quality={100} />

  </>

Noti=
<>
<Notification/>

</>
}
if(this.state.Mobile===2){
  Mobile=
  <>
  <Link href="/">
    <a>
     <h3 className="nameWebsite" >Karnosh</h3>
     </a>
  </Link>
<Mobilee/>
  </>


Noti =
<>
<NotificationMobile/>
</>

}

  return (
    <div className="mainMenu" style={{background:this.state.MobileStyle}}>
     <Toolbar  style={{background:this.state.style}}>
        <Typography variant="body1" className={classes.Title}>

            {Sign}
                {//Noti
                }
                <IconButton color="primary" onClick={this.openSearch}   aria-label="search" style={{ color:'#ffffff94' }}  >
                   <SearchIcon className="iconSearch"/>
                </IconButton>
         
         </Typography> 
      
          {Search}
          
         {Mobile}


     </Toolbar>  
     </div>

  );
}
}
