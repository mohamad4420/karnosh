import React, {  useState } from 'react'
import loadable from '@loadable/component'
const ReactPlayer = loadable(() => import('react-player'))
const Modal = loadable(() => import('@material-ui/core/Modal'))
const Backdrop = loadable(() => import('@material-ui/core/Backdrop'))
const Fade = loadable(() => import('@material-ui/core/Fade'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const InfoOutlinedIcon = loadable(() => import('@material-ui/icons/InfoOutlined'))
const Tooltip = loadable(() => import('@material-ui/core/Tooltip'))
const Generess = loadable(() => import('./Generess'))
const CloseIcon = loadable(() => import('@material-ui/icons/Close'))
const Typography = loadable(() => import('@material-ui/core/Typography'))



export default function MyModel(props){
    const [open,setOpen]=useState(false)

   const handleOpen=()=>{
        setOpen(true)
          }
   const handleClose =()=>{
        setOpen(false)
        
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
                    <div className="row">
                     <div className="Columen">
                       <h4>المصدر </h4>
                       <p>روايه خفيفه </p>
                     </div>
                     <div className="Columen">
                       <h4>مده الحلقه </h4>
                       <p>23 دقيقه </p>
                     </div>
                     </div>

                     <div className="row">
                     <div className="Columen">
                       <h4>عرض من  </h4>
                       <p>2021-07-06 </p>
                     </div>
                     <div className="Columen">
                       <h4>الى </h4>
                       <p>2021-09-21 </p>
                     </div>
                     </div>

                     <div className="row">
                     <div className="Columen">
                       <h4>الاستديو </h4>
                       <p>8bit </p>
                     </div>
                     <div className="Columen">
                       <h4>الترتيب </h4>
                       <p>#2 </p>
                     </div>
                     </div>
                    </div>

                      <div className="contannerBoxSlider">
                      <div className="row">
                      <div className="Columen">
                        <h4>اخر حلقه </h4>
                        <p>قبل يومين </p>
                      </div>
                      <div className="Columen">
                        <h4>موعد تنزيل </h4>
                        <p>الاثنين 8صباحا </p>
                      </div>
                      </div>

                      <div className="row">
                      <div className="Columen">
                        <h4>الموسم </h4>
                        <p>1 </p>
                      </div>
                      <div className="Columen">
                        <h4>عدد المواسم </h4>
                        <p>3 </p>
                      </div>
                      </div>

      
                      </div>

                    </div>
                     
                  </div>
                 
                  </Fade>
                </Modal> 
    </>
    )
} 