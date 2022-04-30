import Image from 'next/image'
import Styles from '../../styles/itemHorizantal.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
const itemHorizantal = (props) => {
    return ( 
 <div className={Styles.section}>
      <div className={Styles.itemMain}>
        <Image className={Styles.image} layout='fill' src={props.data.poster}/>
        <div className={Styles.background}></div>
        <PlayCircleOutlineIcon className={Styles.svg}/>
        <span className={Styles.rate}>8.5</span>
        <StarBorderRoundedIcon className={Styles.rating}/>
        <BookmarkAddOutlinedIcon className={Styles.add}/>
        <span className={Styles.name}>{props.data.name}</span>   
        <div className={Styles.footer}> 
          {
            (props.data.duration!=null||props.data.duration!=undefined)?(<><span >{props.data.duration}</span><span class="dot"></span></>):<></>
          }
           <span className={Styles.gen}>{props.data.genres[0]}</span>
        </div>
          
      </div>  
    <span className={Styles.nametow}>{props.data.name}</span>  
       
  
</div>        
     );
}
 
export default itemHorizantal;

