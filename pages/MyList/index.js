import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Menu = dynamic(() => import('../../src/menu/menu'))
const CheckIcon = dynamic(() => import('@material-ui/icons/Check'))
const CloseIcon = dynamic(() => import('@material-ui/icons/Close'))

function Home({ Main }) {
const [sign,setSign] = useState(false);
const [exist,setExist] = useState(false);
const [data,setData] = useState('');
function Delete(index,deldata){
  let newData=[]
  let nameNew=[]
  for(let i =0;i<data.length;i++){
    if(i!=index)
    {
      newData.push(data[i])
      nameNew.push(data[i].name)
    }
  }
  if(newData.length==0){
    setExist(false)
  }
setData(newData)
var da= localStorage.getItem('da');
da=JSON.parse(da);
axios.post(process.env.domains+'/api/users/removeList',{"idAcount":da.idAcount,'name':deldata})
.then((res)=>{
console.log("removed")
})
.catch((err)=>{
  console.log("err i cant removed")
})
  localStorage.setItem('list',nameNew.toString()) 
}

useEffect(async ()=>{
  var data= localStorage.getItem('da');
  data=JSON.parse(data);
  var list= localStorage.getItem('list');
  if(data!=null){
      setSign(true)
      if(list==null|| list=="")
        setExist(false)
      else
        setExist(true)
  }else
    setSign(false)
try{
var data = await axios.post(process.env.domains+'/api/users/getItemsList',{"id":data.idAcount});
setData(data.data)

}
catch(err){ 
}
},[])
let Sign;
if(sign){
  if(exist ){
    if(data.length!=0){
    Sign=
    <>
    {

      data.map((data,i) =>
        <>       



                <div className="prodectMain" key={Math.random() * 1000000000}>
                 <div className="iconList" onClick={()=>Delete(i,data.name)}><CloseIcon style={{color:"#fff",fontSize:18}}/></div>
                 <Link href={'/Watch/'+encodeURI(data.name.replace(/ /g,'-'))} >
                <a>
                <Image src={data.poster.search('amazon')!=-1?data.poster.replace('.jpg',process.env.imgReplacePoster):data.poster} objectPosition='center' objectFit='cover' alt={data.name} layout='fill'  />
                </a>
                </Link>
                </div>
              

         </>
  
  
  )

    } 
    </>
    }
    else{
      Sign=
      <>
    <div className="sooory">...يتم جلب البيانات يرجى الانظار</div>
      </>
    }
  }
  else{
    Sign=
    <>
  <div className="sooory">قائمتك فارغه</div>
    </>
  }
}else{
  Sign=
  <>
<div className="sooory">يرجى تسجيل الدخول لتتمكن من الوضع بقائمتك</div>
  </>
}

  return (
   <>
   
      <Menu/>
      <div className="spasificationMore">
   
   <span>
     <h1>
  قائمتك
    </h1>
  </span>
  <span style={{color:"#838080"}}>
  <h2>
  &bull;
  </h2>
  </span>
  {
   /*
  <span>
  <h2>
    الصفحه 
    </h2>
  </span>
  */
}

</div>
      <div className="slasah"></div>
      <div className="MainItemsList" >
      {Sign}
      </div>
 </> 
   
  )
}



export default  Home;

