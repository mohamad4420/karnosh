import React, { Component } from 'react'
import loadable from '@loadable/component'
import Link from 'next/link'

const IconButton = loadable(() => import('@material-ui/core/IconButton'))
const Tooltip = loadable(() => import('@material-ui/core/Tooltip'))
const PlayCircleOutlineIcon = loadable(() => import('@material-ui/icons/PlayCircleOutline'))
const MyModel = loadable(() => import('../MyModel'))

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
               <div className="playSliderInformation">
                  <Tooltip title="تشغيل الحلقه الاولى" placement="top">
                  <IconButton className="playSliderInformationInsidee" style={{color:"#fff"}} aria-label="تشغيل الحلقه الاولى">
                   <PlayCircleOutlineIcon style={{fontSize:38}} />
                   </IconButton>
                   </Tooltip>
                   </div>
  
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
                  <img  width="100%" height="100%" className="ImgSlider" src={this.props.data.poster}      alt={this.props.data.name} title={"مترجم "+this.props.data.name}  />
                </a>
                </Link>

                {Show}
                <div className="Rating">{//<spam><StarIcon style={{color:"gold"}}/></spam>
                } <span>8.5</span></div>
                <div className="numberOfServer">حلقه {this.props.data.NumberOfServer}</div>
                

                  {shdow}

           
                </div>
        
            </>
        )
    }
}
export default itemSlider


