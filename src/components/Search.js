import { useState, useEffect } from "react";
import Cake from "./Cake";
import queryString from "query-string";
import axios from "axios";

function Search(props) {
  var [cakeresult, setCakes] = useState([]); 
  var [showSpinner,setShowSpinner]=useState(false);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    setShowSpinner(true)
    axios({
      
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log("search api", response.data);
        setCakes(response.data.data);
        setShowSpinner(false)
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
    { showSpinner && <div><h1>Loading.........</h1></div>}
      {cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
      {cakeresult.length<=0 && <div>
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
