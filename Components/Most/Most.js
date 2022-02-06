
import React, { useEffect, useState } from 'react';
import styles from '../../styles/most.module.scss'
import loadable from '@loadable/component'
import Image from 'next/image'

const Generess = loadable(() => import('../Generess'))
const Chip = loadable(() => import('@material-ui/core/Chip'))


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
      {isMobile?<Image  src={props.data.poster} layout="fill" title={props.data.name} alt={props.data.name} />:<Image  src={props.data.galary} layout="fill" title={props.data.name} alt={props.data.name} />}
      </div>     
      <div className={styles.ContanerSpeker}></div>
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
       <div key="mostGeneress" className={styles.mostGeneress}>
         <Generess data={{ gen:props.data.genres,tp:props.data.type}}/>
       </div>
       <div className={styles.dateMost}>{props.data.date}</div>
     </div>
        <div className={styles.settingMost}>
          <div className={styles.play}>تشغيل</div>
          <div className={styles.list}> <span>المشاهده لاحقا</span></div>
          <div className={styles.share}> </div>
        </div>
     <div className={styles.discriptionMost}>{props.data.description}</div>
     <div className={styles.TimeMost}>الوقت :  {props.data.time}</div>
     <div className={styles.heros}>الابطال</div>
     <div className={styles.searss}><div>المواسم</div></div>
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
export default Most

