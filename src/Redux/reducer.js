export function Naveen (state = {},{type,payload}){
    console.log("action to be performed")
    switch(type){
        case "LOGIN" :{
         state = {...state}
         state["isloggedin"] = true 
         return state
        }
        case "NewOrder":{
            state={...state}
            state['orderplace']=payload
            return state
        }
 
 
        default : return state
    }
 }
