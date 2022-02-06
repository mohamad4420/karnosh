import * as React from 'react';
import loadable from '@loadable/component'
const Box = loadable(() => import('@mui/material/Box'))
const Card = loadable(() => import('@mui/material/Card'))
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image'
import MyModle from '../modle/MyModel'
import Link from 'next/link'

export default function ItemSearch(props) {

  return (
    <Card sx={{ display: 'flex' }} className="CardItemSearch" style={{height:130,marginTop:10,position:'relative',top:65,background:"rgb(20, 20, 20)"}}>

      <Box className='BoxDetSearch' sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }} >
          <Typography color="rgba(255, 255, 255, 0.952)" component="div" variant="h5">
            {props.data.name}
          </Typography>
          <Typography  variant="subtitle1" color="rgba(255, 255, 255, 0.603)" component="div">
            {props.data.Discription}
          </Typography>
        </CardContent>
      </Box>

      <Box className='boxPlayInfoSearch' sx={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={"/Play/"+encodeURI(props.data.name)}>
          <IconButton aria-label="Play" onClick={props.myFunction}>
          <PlayCircleOutlineIcon style={{fontSize:30,color:"#fff"}} />
          </IconButton >
          </Link>
          <MyModle size={30} data={props.data}/>
       </Box>
      <div className="itemSearchImage">
      <Image layout='fill' quality={20} src={props.data.poster}/>
      </div>
    </Card>
  );
}
