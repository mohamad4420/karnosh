import React from 'react'
import loadable from '@loadable/component'
import Link from 'next/link'

const Button = loadable(() => import('@material-ui/core/Button'))

export default function Generess(props){
    return(
        <>
        {
            props.data.gen.map(function(data){
                return (
                   <Link href={'/More?gen='+data+'&tp='+props.data.tp}  key={Math.random() * 1000000000}>
                   <Button 
                    variant="outlined"
                    style={{borderRadius:30,margin:3,borderColor:"#3d3d3dfb",color:"#adadadd2"}}
                    >
                   {data}
                    </Button>
                    </Link>
      
              
            )})
        }
        </>
    )
}