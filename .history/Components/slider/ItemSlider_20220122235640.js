import React, { Component } from 'react'
import loadable from '@loadable/component'
import Link from 'next/link'
import Image from 'next/image'
const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Tooltip = loadable(() => import('@material-ui/core/Tooltip'))
const PlayCircleOutlineIcon = loadable(() => import('@material-ui/icons/PlayCircleOutline'))
const MyModel = loadable(() => import('../modle/MyModel'))
const Chip = loadable(() => import('@material-ui/core/Chip'))

import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class itemSlider extends Component{
    constructor(props){
        super(props);
        this.state={
           show:false,
           traler:null,
           Mobile:true,
        
        }
        this.route = this.route.bind(this);
      }
      route=()=>{
        router.push('/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-')), undefined, { shallow: true })
      }

      componentDidMount(){
      console.log(window.innerWidth)
         if(window.innerWidth>500)
        this.setState({Mobile:false})
      else
        this.setState({Mobile:true})
        window.addEventListener('resize',()=>{
            if(window.innerWidth>500)
            this.setState({Mobile:false})
          else
            this.setState({Mobile:true})
        })


      }

    render(){
      let Show;
      let shdow;
      if(this.state.Mobile){
        shdow=<></>
      }else{
        shdow=
        <>
           <Link href={"/Play/"+encodeURI(this.props.data.name)}>
              <a>
               <div className="playSliderInformation">
                  <Tooltip title="تشغيل الحلقه الاولى" placement="top">
                  <IconButton className="playSliderInformationInsidee" style={{color:"#fff"}} aria-label="تشغيل الحلقه الاولى">
                   <PlayCircleOutlineIcon style={{fontSize:38}} />
                   </IconButton>
                   </Tooltip>
                   </div>
              </a>
            </Link>
                   <div className="InformationSlider">
                    <MyModel data={this.props.data}/>
                   </div>  
        </>
      }
        return(
            <>
            <div  className='ItemSwiper' onMouseEnter={this.show} onMouseLeave={()=>{this.setState({show:false})}}  >
                <Link href={'/Watch/'+encodeURI(this.props.data.name.replace(/ /g,'-'))}>
                  <a>
                  <h2 className="NameSliderMain " >{"مترجم "+this.props.data.name}</h2>
                  <Image   className="ImgSlider" src={this.props.data.poster}   layout='fill'   alt={this.props.data.name} title={"مترجم "+this.props.data.name}  />
                </a>
                </Link>

                {Show}
                <div className="Rating">
                  {
                    /*
                   <Chip
                    size="small"
                    label="1.8"
                    color="Secondary"
                    icon={  
                    <StarIcon style={{fontSize:28,color:"yellow ",marginRight:5}} />
                    }
                />
                */
                  }
            </div>
            {
                    /*
                <div className="numberOfServer">
                <Chip
                    color="Secondary"
                    size="small"
                    label={"حلقه " +this.props.data.NumberOfServer}
                />
                
                </div>
            */}

                  {shdow}

           
                </div>
   
            </>
        )
    }
}
export default itemSlider


