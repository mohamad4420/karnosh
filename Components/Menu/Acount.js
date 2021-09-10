import IconButton from '@material-ui/core/IconButton';
import Image from 'next/image'

export default function Acount(){
    return(
    <>
       <IconButton edge="start" color="inherit" aria-label="menu">
         <Image  src='/AccountImage.png' width="35px" height="35px" />
        </IconButton>
    </>
    )

}
