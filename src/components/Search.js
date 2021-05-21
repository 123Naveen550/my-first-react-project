import { useState, useEffect } from "react";
import Cake from "./Cake";
import queryString from "query-string";
import axios from "axios";

function Search(props) {
  var [cakeresult, setCakes] = useState([]); 
  var [isloading,setloading]=useState(false);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    setloading(true)
    axios({
      
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log("search api", response.data);
        setCakes(response.data.data);
        setloading(false)
      },
      (error) => {
        console.log(error);
        // showSpinner(false)
      }
    );
  }, [query.q]);
  var img="https://cdn.dribbble.com/users/1787720/screenshots/9701662/media/a4442285944677eef311da1b4170719f.png?compress=1&resize=400x300"

  return (
    <div>
    
    
    
    <div className="row">
      {isloading && <div>
        <div class = "d-flex justify-content-center" style={{margin:"100px 30px"}}>
          <div class="spinner-border" role="status">
            <span class = "sr-only">Loading...</span>
          </div>
        </div>
        </div>}
      {! isloading && cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
      {!isloading&&cakeresult.length<=0 && 
          <div class="card border-0" style={{marginLeft:"20em",marginTop:"10em"}}>
          <div class="card mb-3 border-0 " style={{maxWidth: "700px"}}>
  <div class="row no-gutters ">
    <div class="col-md-4" >
      <img src={img} alt="..." style={{marginLeft:"5rem", width:"500px",height:"300px"}}/>
    </div>
    {/* <div class="col-md-8">
      <div class="card-body">
        <b class="card-title">Oop!</b>
        <p class="card-text">Sorry, no results found!</p>
        <h4>Please check the spelling or try searching for something else</h4>
      </div>    
  </div> */}
            </div>
            </div>                
                </div>}


            
            </div> 
            </div>

  );
}


export default Search;
