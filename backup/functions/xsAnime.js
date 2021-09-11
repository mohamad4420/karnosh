const router = require('express').Router();
var axios = require("axios").default;
const { json } = require('express');
const cheerio = require("cheerio")
var request = require("request");
const e = require('cors');
var fs = require('fs');
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    async  function xsAnime (){
      while(true){
    let main = await axios.get('https://ww.anime4up.com/episode/')
    let $ = cheerio.load(main.data);
    let all =[]

    $('div.anime-card-poster > div > a').map( function(){
      if($(this).attr('href')!="")
      all.push($(this).attr('href'))
    })
    console.log(all)
    for(let io =0;io<all.length;io++){
      try{
    let name =  $('div.anime-page-link > a').text()
    let orglink =$('div.anime-page-link > a').attr('href')
      let link = await axios.get(all[io])
     $ = cheerio.load(link.data);
     if(name!=""){
     let search = await axios.post('https://karnoshab.herokuapp.com/api/movie/searchAdd',{"q":name});
     let link2 =await axios.get(orglink)
     $$ = cheerio.load(link2.data)  
     let ser=$$('div.episodes-card-title > h3 > a').attr('href')
     if(search.data.length==0 || search.data[0].episodes==undefined){
       let genres=[]
       $$('ul.anime-genres > li > a').map(function(){
        genres.push($$(this).text())
       })
       let Description =  $$('p.anime-story').text()
       let myanimelist = await axios.post('https://karnoshab.herokuapp.com/api/movie/myanimelist',{"name":name});
       let Galary=null
       let linkTraler=null
       let traler={
         "hd":"",
         "sd":""
       }
       try{
       let imdb = await axios.post('https://karnoshab.herokuapp.com/api/movie/imdb',{"name":name});
       Galary=imdb.data.Galary
       linkTraler=imdb.data.linkTraler
       }catch(err){}
      let data = {
        "name":name,
        "hero":[],
        "genres":genres,
        "time":"22 min",
        "date":myanimelist.data.date,
        "rating":myanimelist.data.rating,
        "Description":Description,
        "poster":myanimelist.data.poster,
        "Galary":Galary,
        "linkTraler":linkTraler,
        "traler":traler,
        "type":"anime",
        "other":[],
        "Related":myanimelist.data.Related,
        "Season":"0",
        "SeasonData":[],
        "episodes":[]
      }
    console.log(data)
   axios.post('https://karnoshab.herokuapp.com/api/movie/addAnime',data)
   .then((res)=>{
     console.log(res.data)
   })
   .catch((err)=>{
    console.log("errAdd")
     console.log(err)
   })
 
   }
 
  let animeCount = await axios.post('https://karnoshab.herokuapp.com/api/movie/animeCount',{"name":name});
  search = await axios.post('https://karnoshab.herokuapp.com/api/movie/searchAdd',{"q":name}); 
  console.log(" count = "+animeCount.data.lin)
let lin =parseInt(animeCount.data.lin)+1

  let link3 =await axios.get(ser)
  let $$$$ = cheerio.load(link3.data)  
  let wh= $$$$('li.episode-active > a').text()
  wh=wh.replace(/ /g,'-').replace('الحلقة-','%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-')

let chick=true
while(chick){
try{
  console.log(name)
  let neww =ser.replace(wh,'%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-'+lin)
  let comeOn =await axios.get(neww)
  $$$$ = cheerio.load(comeOn.data) 
  let serverss=[]
  $$$$('ul#episode-servers > li > a').map(function(){
    if($$$$(this).attr('data-ep-url').search('moshahda')==-1)
      serverss.push($$$$(this).attr('data-ep-url')+","+$$$$(this).text())
  })
  console.log(serverss)

  let animeAdd = await axios.post('https://karnoshab.herokuapp.com/api/movie/updateAnime',{"id":search.data[0]._id,"name":name,"servers":serverss});
  console.log(animeAdd.data)

lin=lin+1
}catch(err){
  console.log("is hear")
  chick=false
}
}
  

    }
  }catch(err){}
 }
 
 await sleep(3600000)
}
}
    exports.xsAnime = xsAnime;