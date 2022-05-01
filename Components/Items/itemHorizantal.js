import Image from 'next/image'
import Styles from '../../styles/itemHorizantal.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import Link from 'next/link'
const itemHorizantal = (props) => {
    return ( 
 <div className={Styles.section}>
      <div className={Styles.itemMain}>
        <Image className={Styles.image} layout='fill' src={props.data.poster}/>
        <div className={Styles.background}></div>
        <Link href={`/play/${props.data._id}`}>
        <PlayCircleOutlineIcon className={Styles.svg}/>
        </Link>
        <span className={Styles.rate}>{props.data.rating}</span>
        <StarBorderRoundedIcon className={Styles.rating}/>
        <BookmarkAddOutlinedIcon className={Styles.add}/>
        <span className={Styles.name}>{props.data.name}</span>   
        <div className={Styles.footer}> 
          {
            (props.data.duration!=null||props.data.duration!=undefined)?(<><span >{props.data.duration}</span><span className='dot' ></span></>):<></>
          }
           <span className={Styles.gen}>{props.data.genres[0]}</span>
        </div>
          
      </div>  
    <span className={Styles.nametow}>{props.data.name}</span>  
       
  
</div>        
     );
}
 
export default itemHorizantal;

