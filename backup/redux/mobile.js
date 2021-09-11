import { Component }from 'react'
const initState={
    isMobile:undefined
}
const reducer = (state= initState,action)=>{
    if(action.type == 'CHANGE'){
        return{
            isMobile:action.isMobile
        }
    }
    return state
}
export default reducer