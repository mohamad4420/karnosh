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



export default function MyModel(props){
    const [open,setOpen]=useState(false)

   const handleOpen=()=>{
        setOpen(true)
          }
   const handleClose =()=>{
        setOpen(false)
        
       }
       let Type=""
       if(props.data.Type=="movie_mt"){
        Type="افلام مترجمه"
       }else if(props.data.Type=="movie_ar"){
        Type="افلام عربيه"
       }
    return(
    <>
                    <Tooltip title="المزيد من المعلومات" className="InformationSliderInsidee">
                 <IconButton onClick={handleOpen}  style={{color:"#fff"}} aria-label="المزيد من المعلومات">
                 <InfoOutlinedIcon style={{fontSize:38}} />
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
                    volume={0.2}
                    playing={true}
                    url={"https://www.youtube.com/embed/"+props.data.traler}
                    playsinline={true}
                    controls={false}
                    ></ReactPlayer>
                  </div>
                  <div className="ColorTransition"></div>
                  <div className="contannerModelSlider">
                    <div className="nameSliderMore">{props.data.name}</div>
                    <div className="contannerGeneress"><Generess data={  { gen:props.data.Genres,tp:props.data.Type}}/></div>
                    <div className="contannerBoxSlider">
                    <Typography className="center white"  variant="p" component="p">
                        {props.data.Discription}
                    </Typography>
                    <ItemModle  firstName="التصنيف" firstData={props.data.Type} lastName="الدوله" lastData={props.data.country.toString()}/>
                    <ItemModle  firstName="الوقت" firstData={props.data.Duration} lastName="الدقه" lastData={props.data.quality}/>
                    </div>

                      <div className="contannerBoxSlider">
                     
                       </div>

                    </div>
                     
                  </div>
                 
                  </Fade>
                </Modal> 
    </>
    )
} 