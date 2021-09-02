import dynamic from 'next/dynamic'

const FacebookIcon = dynamic(() => import('@material-ui/icons/Facebook'))
const TwitterIcon = dynamic(() => import('@material-ui/icons/Twitter'))
const IconButton = dynamic(() => import('@material-ui/core/IconButton'))


export default function  Footer() {
    
return(
        <>
         <div className="MainFoter">
             |<div className="contentFoter">
                 <div> 
                 <a href="https://www.facebook.com/karnoshMovie" rel="noopener" target="_blank">
                  .
                 <IconButton style={{color:'#fff'}} >
                     .
                  <FacebookIcon/>
                 </IconButton>
                 </a>
                  .
                  </div>
                  <div>
                  <IconButton style={{color:'#fff'}} >
                  .
              <TwitterIcon/>
                  </IconButton>
                  </div>
             </div>
             <div className="mainSPaF">
             <div>تصميم و برمجة كرنوش </div>
             <div>جميع الحقوق محفوظة ©   كرنوش</div>
             </div>
         </div>
        </>
)

}
