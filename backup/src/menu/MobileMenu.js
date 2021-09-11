
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ListIcon from '@material-ui/icons/List';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import PetsIcon from '@material-ui/icons/Pets';
import Google from '../../src/auth/google'
import Link from 'next/link'
export default function MobileMenu() {
const [open,setOpen]=useState(false)
const [sing,setSign]=useState(false)
let Open;
let Sign;

useEffect(()=>{
  try{
    var da= localStorage.getItem('da');
    da=JSON.parse(da);
    if(da!=null){
       setSign(true)
    }
    else{
      setSign(false)
    }
     }
   catch(err){
     setSign(false)
   }

},[])

if(!sing){
  Sign=<>       
  <div className="signIn">تسجيل الدخول / حساب جديد</div>
 <div className="authMobile"> <Google/></div></>
}


if(open){
  Open=
  <>
    <IconButton aria-label="menuSmail" className="menuIcon" style={{ color:'#ffffff94' }}    
          aria-haspopup="false"
          onClick={()=>{setOpen(false)}}
         >
       <CloseIcon/>
      </IconButton>
        <div className="mainMobileMenu">
          {Sign}
        <div className="MainListMenuMobile">



        <Link href={'/'}>
             <a>
      <div onClick={()=>{setOpen(false)}} className="listMenuMobile"> <HomeIcon/>  &nbsp;&nbsp;&nbsp;&nbsp;  الرئيسيه</div>
            </a>
        </Link>



        <Link href={'/Movie'}>
             <a>
      <div onClick={()=>{setOpen(false)}} className="listMenuMobile"> <MovieIcon/>  &nbsp;&nbsp;&nbsp;&nbsp;  افلام</div>
      </a>
        </Link>


        <Link href={'/Series'}>
             <a>
      <div onClick={()=>{setOpen(false)}} className="listMenuMobile"> <LocalMoviesIcon/>  &nbsp;&nbsp;&nbsp;&nbsp;  مسلسلات و برامج</div>
      </a>
        </Link>


      <Link href={'/Anime'}>
             <a>
      <div onClick={()=>{setOpen(false)}} className="listMenuMobile"> <PetsIcon/>  &nbsp;&nbsp;&nbsp;&nbsp;  انمي</div>
      </a>
        </Link>



        <Link href={'/MyList'}>
             <a>
      <div onClick={()=>{setOpen(false)}} className="listMenuMobile"><ListIcon/>  &nbsp;&nbsp;&nbsp;&nbsp; قائمتي</div>
      </a>
        </Link>



      </div>
      </div>
  </>
}else{
  Open=
  <>
    <IconButton aria-label="menuSmail" className="menuIcon" style={{ color:'#ffffff94' }}    
          aria-haspopup="true"
          onClick={()=>{setOpen(true)}}
         >
       <MenuIcon/>
      </IconButton>
    </>
}



return(
  <>
  
 {Open}


  
  </>
   )
}