import React, {  useState } from 'react'
import loadable from '@loadable/component'
const ReactPlayer = loadable(() => import('react-player'))
const Modal = loadable(() => import('@material-ui/core/Modal'))
const Backdrop = loadable(() => import('@material-ui/core/Backdrop'))
const Fade = loadable(() => import('@material-ui/core/Fade'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const InfoOutlinedIcon = loadable(() => import('@material-ui/icons/InfoOutlined'))
const Tooltip = loadable(() => import('@material-ui/core/Tooltip'))
const Generess = loadable(() => import('../Generess'))
const CloseIcon = loadable(() => import('@material-ui/icons/Close'))
const Typography = loadable(() => import('@material-ui/core/Typography'))
const ItemModle = loadable(() => import('./itemModle'))
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';



export default function MyModel(props){
    const [open,setOpen]=useState(false)
    const [duration,setDuration]=useState(0)
    const [playedInOne,setPlayedInOne]=useState(0)
    const [play,setPlay]=useState(true)
    const [sound,setSound]=useState(1)
   const handleOpen=()=>{
        setOpen(true)
          }
   const handleClose =()=>{
        setOpen(false)
        
       }
       let type=""
       if(props.data.type=="movie_mt"){
        type="افلام مترجمه"
       }else if(props.data.type=="movie_ar"){
        type="افلام عربيه"
       }else if(props.data.type=="movie_tr"){
        type="افلام تركيه"
       }else if(props.data.type=="movie_hn"){
        type="افلام هنديه"
       }else if(props.data.type=="movie_wth"){
        type="افلام وثائقيه"
       }else {
        type="N/A"
       }
    return(
    <>
                 <Tooltip title="المزيد من المعلومات" className="InformationSliderInsidee">
                 <IconButton onClick={handleOpen}  style={{color:"#fff"}} aria-label="المزيد من المعلومات">
                 <InfoOutlinedIcon style={{fontSize:props.size==undefined?38:props.size}} />
                 </IconButton>
                 </Tooltip>

              <Modal 
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open} >
                    <div className="MainModel">
                      <div className="overlayReactPlayerModel">
                      <IconButton onClick={handleClose}  style={{color:"#fff"}} aria-label="المزيد من المعلومات">
                        <CloseIcon style={{fontSize:38}} />
                        </IconButton>
                      </div>
                    <div className="ReactPlayerModel">
                    <ReactPlayer 
                    config={{
                      youtube: {
                        playerVars: {      
                          showinfo: 0,
                          enablejsapi:1,
                          rel:0,
                          origin:'https://www.karnosh.ml/' }
                      }
                    }}
                    className="videoT" 
                    width="100%" 
                    height="450px"
                    onSeek={(e) => console.log('onSeek', e)}
                    volume={0.05}
                  
                    playing={play}
                    loop
                    muted={sound==1?false:true}
                    onProgress={(e)=>setPlayedInOne(e.played * 100)}
                   
                    url={"https://www.youtube.com/embed/"+props.data.traler}
                    playsinline={true}
                    controls={true}
                    ></ReactPlayer>
                  </div>
                  <div className="muteandunmute">
                  <IconButton onClick={()=>{sound==1?setSound(0):setSound(1)}}  style={{color:"#fff"}} aria-label="المزيد من المعلومات">
                        {sound==1? <VolumeUpIcon style={{fontSize:38}} />: <VolumeOffIcon style={{fontSize:38}} />}
                   </IconButton>
                  </div>
                  <div className="ColorTransition">
                        <Slider
                        size="small"
                        value={playedInOne}
                        defaultValue={0}
                        step={1}
                        color='secondary'
                        valueLabelDisplay={'off'}
                      />
                  </div>
                  <div className="contannerModelSlider">
                    <div className="nameSliderMore">{props.data.name}</div>
                    <div className="contannerGeneress"><Generess data={  { gen:props.data.genres,tp:props.data.type}}/></div>
                    <div className="contannerBoxSlider">
                    <Typography className="center white"  variant="p" component="p">
                        {props.data.Discription}
                    </Typography>
                    <ItemModle  firstName="التصنيف" firstData={type} lastName="الدوله" lastData={props.data.country.toString()}/>
                    <ItemModle  firstName="الوقت" firstData={props.data.Duration} lastName="الدقه" lastData={props.data.quality}/>
                    </div>
                    </div>
                  </div>
                 
                  </Fade>
                </Modal> 
    </>
    )
} 