
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import styles from '../../styles/most.module.scss'
import { connect } from 'react-redux'
import Home from '@material-ui/icons/Home';
const PlayArrowIcon = dynamic(() => import('@material-ui/icons/PlayArrow'))
const AddIcon = dynamic(() => import('@material-ui/icons/Add'))
const Chip = dynamic(() => import('@material-ui/core/Chip'))
const Share = dynamic(() => import('../shared.js'))
const VolumeOffIcon = dynamic(() => import('@material-ui/icons/VolumeOff'))
const ArrowDropDownIcon = dynamic(() => import('@material-ui/icons/ArrowDropDown'))


 function Most(props){
   const [isMobile,setIsMobile]=useState(undefined)
   useEffect(()=>{
if(window.innerWidth<500){
  setIsMobile(true)
}else{
  setIsMobile(false)
}
window.addEventListener('resize', function(event) {
  if(window.innerWidth<500){
    setIsMobile(true)
  }else{
    setIsMobile(false)
  }

}, true);

   },[])
  return(
    <>
    <div style={{color:"#fff"}}>{props.isMobile}</div>
    <div className={styles.MainMost}>
      <div className={styles.Contaneroverlay}></div>
      <div className={styles.ContanerContant}>
      {isMobile?<img width="100%" height="100%" src={props.data.poster} layout="fill" title={props.data.name} alt={props.data.name} />:<img width="100%" height="100%" src={props.data.poster} layout="fill" title={props.data.name} alt={props.data.name} />}
      </div>     
      <div className={styles.ContanerSpeker}><VolumeOffIcon/></div>
     <div className={styles.ContanerMost}>
     <div className={styles.nameMost}>{props.data.name}</div>
     <div className={styles.ContanerSp}>
       <div className={styles.nameTage}>
           <Chip
          size="medium"
          style={{color:"#fff",borderColor:"#fff",background:"#3a3737",marginRight:5,fontSize:16}}
          label={"انمي"}
          component="a"
        />
         </div>
       <div key="mostGeneress" className={styles.mostGeneress}>{
       props.data.Genres.map(function(data,i){
         return(
           <>
          <Chip
          key={i}
          variant="outlined"
          size="medium"
          className={styles.genres}
          style={{color:"#fff",borderColor:"#fff",marginRight:5,fontSize:16}}
          label={data}
          component="a"
          clickable
        />
           </>
         )
       })}
 
       </div>
       <div className={styles.dateMost}>{props.data.date}</div>
     </div>
        <div className={styles.settingMost}>
          <div className={styles.play}><PlayArrowIcon/>تشغيل</div>
          <div className={styles.list}><AddIcon/> <span>المشاهده لاحقا</span></div>
          <div className={styles.share}> <Share/></div>
        </div>
     <div className={styles.discriptionMost}>{props.data.Description+" , "+props.data.name}</div>
     <div className={styles.TimeMost}>الوقت :  {props.data.time}</div>
     <div className={styles.heros}>الابطال</div>
     <div className={styles.searss}><div><ArrowDropDownIcon/>المواسم</div></div>
     </div>

    </div>
    </>
  )
}
function mapDispatchToProps(dispatch){
  return{
    change:()=> dispatch({type:"CHANGE"})
  }
}
function mapStateToProps(state){
  return{
    isMobile:state.isMobile
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Most)

