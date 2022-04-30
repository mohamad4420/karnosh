import Image from 'next/image'
import Styles from '../../styles/itemMovie.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
export default function ItemMovie (props){
    return (
        <>
        <div className={Styles.section}>
               <div className={Styles.itemMain}>
                 <Image layout='fill' src={props.data.poster}/>
                 <div className={Styles.background}></div>
                 <PlayCircleOutlineIcon className={Styles.svg}/>
                 <li className={Styles.rate}>8.5</li>
                 <StarBorderRoundedIcon className={Styles.rating}/>
                 <BookmarkAddOutlinedIcon className={Styles.add}/>
                 <div className={Styles.footer}>
                     <li >{props.data.duration}</li>
                   <span class="dot"></span>
                    <li >{props.data.genres[0]}</li>
                 </div>
               </div>  
               <div className={Styles.info}>
                 <li className={Styles.name}>{props.data.name}</li>     
               </div>
         </div>           
        </>
        )
}