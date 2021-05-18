import {createStore} from "redux"
import {Naveen} from "./reducer"


var store  = createStore(Naveen)

store.dispatch({
    type:"LOGIN"
})

store.dispatch({
    type:"New Order"
})


console.log("after dispatch store ka state" , store.getState())

export default store
