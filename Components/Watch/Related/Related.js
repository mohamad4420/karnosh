import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import style from '../../../styles/Related.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
const Grid = dynamic(() => import('./Grid'))


function Related(){
    const [loadingg,setloadingg]=useState(false)

    let Relatedd;
    if(loadingg){
        Relatedd=
        <>
        <CircularProgress />
        </>
    }else{
        Relatedd=
      
       < >
           <Grid/>
        </> 
    }
    return (
        <>
        {Relatedd}
        </>
    )
}
export default Related
