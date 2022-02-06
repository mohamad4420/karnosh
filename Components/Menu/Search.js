import React, {  useEffect, useState } from 'react'
import loadable from '@loadable/component'
import axios from 'axios'
const Modal = loadable(() => import('@material-ui/core/Modal'))
const Backdrop = loadable(() => import('@material-ui/core/Backdrop'))
const Fade = loadable(() => import('@material-ui/core/Fade'))
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Tooltip = loadable(() => import('@material-ui/core/Tooltip'))
const CloseIcon = loadable(() => import('@material-ui/icons/Close'))
const SearchIcon = loadable(() => import('@mui/icons-material/Search'))
const ItemSearch = loadable(() => import('./ItemSearch'))




export default function MyModel(props){
    const [open,setOpen]=useState(false)
    const [data,setData]=useState([])
    const getData=(event)=>{
      if(event.target.value!=""){
        axios.post(process.env.url+'/DataVideo/search',{'name':event.target.value})
        .then((res)=>{
          setData(res.data)
        })
        .catch((err)=>{
        console.log(err)
        })
          }else{
            setData([])
          }
        }

   const handleOpen=()=>{
        setOpen(true)
          }
   const handleClose =()=>{
        setOpen(false)
        
       }

       useEffect(()=>{
         console.log(data)
       },[data])
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
                    <div className="MainSearchModel">
                      <div className="overlaySearch">
                      <IconButton onClick={handleClose}  style={{color:"#fff"}} aria-label="المزيد من المعلومات">
                        <CloseIcon style={{fontSize:38}} />
                        </IconButton>
                        <input onChange={(e)=>{getData(e)}} className="inputSearch"></input>
                      </div>
                      <div className='SearchBox'>
                     
                     {
                     data.map(function (data,i){
                       console.log(data)
                       return(
                       <ItemSearch myFunction={handleClose} key={"ItemSearchData"+data.name+i} data={data}/>
                       )
                      })
                       }
                     </div>
                  </div>
                  </Fade>
                </Modal> 
    </>
    )
} 