import React, { useState } from 'react'
import loadable from '@loadable/component'

import style from '../../../styles/Related.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
const Grid = loadable(() => import('./Grid'))


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
