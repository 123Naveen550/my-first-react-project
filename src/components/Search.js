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
      {!isloading && cakeresult.length<=0 && <div>
                <div class="card" style={{marginLeft:"16em",marginTop:"9em"}}>
                    <div class="card-header">
                        <b>Oop!</b> 
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                <p>Sorry, no results found!</p>               
              </blockquote>
            </div>            
                    </div>
                </div>}
      </div>
    </div>
  );
}

export default Search;
