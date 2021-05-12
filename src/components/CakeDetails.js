import react from "react";
import { Component } from "react";
import Details from "./Details";
// import Cake from "./Cake";
import {axios} from 'axios';
import { useState, useEffect } from "react";
import {queryString} from "querystring"




function CakeDetails(props){

    var [cakeresult, setCakes] = useState({});

    console.log("result",cakeresult,setCakes);
    
    let qq= props.match.params.id;
  


    useEffect(() => {
        // alert("hii")
        var apiurl = "https://apifromashu.herokuapp.com/api/cake/"+qq;
        // console.log("apiii",apiurl)
        let temp = []
        fetch(apiurl)
        .then(res => res.json())
        .then(
          (response) => {
            console.log('respoo',response)
           
       
            setCakes(response.data);

            console.log("Result",cakeresult)
          })

      }, [props.match.params.id]);
     
     
  
        return (
            <div>
            <div className="row">
              {/* {cakeresult.map((each) => { */}
                 <Details cakedata={cakeresult} />;
              {/* })}       */}
              
              </div>
            </div>
        
        )
    }


export default CakeDetails;

