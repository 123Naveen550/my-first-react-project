import react from "react";
import { Component } from "react";
import Details from "./Details";
// import Cake from "./Cake";
import {axios} from 'axios';
import { useState, useEffect } from "react";
import {queryString} from "querystring"




function CakeDetails(props){

    var [cakeresult, setCakes] = useState({});
    var [Loading ,setLoading]=useState(true)

    console.log("result",cakeresult,setCakes);
    
    let qq= props.match.params.id;
  


    useEffect(() => {
      
        var apiurl = "https://apifromashu.herokuapp.com/api/cake/"+qq;

        let temp = []
        fetch(apiurl)
        .then(res => res.json())
        .then(
          (response) => {
            console.log('respoo',response)
           
       
            setCakes(response.data);
            setLoading(false);

            console.log("Result",cakeresult)
          })

      }, [props.match.params.id]);
     
     
  
        return (
          <div>
        {Loading && <div>
          <div class="d-flex justify-content-center" style={{margin:"100px 100px"}}>
          <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
          </div>
          </div></div>}
          {!Loading && <div className="row">
            <Details cakedata={cakeresult} />
          </div>}
          </div>         
        
            
            ) 
        
        
    }
export default CakeDetails;

