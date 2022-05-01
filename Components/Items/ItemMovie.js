import Image from 'next/image'
import Styles from '../../styles/itemMovie.module.scss'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Link from 'next/link'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
export default function ItemMovie (props){
    return (
        <>
        <div className={Styles.section}>
               <div className={Styles.itemMain}>
                 <Image layout='fill' src={props.data.poster} alt={props.data.name}/>
                 <div className={Styles.background}></div>
                 <Link href={`/play/${props.data._id}`}>
                 <PlayCircleOutlineIcon color='#fff' width="80" height="80" className={Styles.svg}/>
                </Link>
                 <div className={Styles.rate}>8.5</div>
                 <StarBorderRoundedIcon className={Styles.rating}/>
                 <BookmarkAddOutlinedIcon className={Styles.add}/>
                 <div className={Styles.footer}>
                     <div >{props.data.duration}</div>
                   <span className="dot"></span>
                    <div >{props.data.genres[0]}</div>
                 </div>
               </div>  
               <div className={Styles.info}>
                 <div className={Styles.name}>{props.data.name}</div>     
               </div>
         </div>           
        </>
        )
}