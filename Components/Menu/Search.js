import React, {  useState } from 'react'
import loadable from '@loadable/component'
const Modal = loadable(() => import('@material-ui/core/Modal'))
const Backdrop = loadable(() => import('@material-ui/core/Backdrop'))
const Fade = loadable(() => import('@material-ui/core/Fade'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Tooltip = loadable(() => import('@material-ui/core/Tooltip'))
const CloseIcon = loadable(() => import('@material-ui/icons/Close'))
const SearchIcon = loadable(() => import('@mui/icons-material/Search'))
const TextField = loadable(() => import('@mui/material/TextField'))

function getData(event){
  console.log(event.target.value)
}

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

                 <Tooltip title="البحث" >
                 <IconButton onClick={handleOpen}   style={{color:"#fff"}} aria-label="البحث">
                 <SearchIcon style={{fontSize:30}} />
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
                      <div className='SearchBox'>
                      <TextField
                      onKeyPress={(e)=>getData(e)}
                      dir='rtl'   
                      color="primary"
                      variant="filled"
                      className="SearchFiled"
                      focused
                      label="لرجاء وضع الاسم"
                      />

                      </div>
                  </div>
                  </Fade>
                </Modal> 
    </>
    )
} 