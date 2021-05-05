import { useState, useEffect } from "react";
import Cake from "./Cake";
import queryString from "query-string";
import axios from "axios";

function Search(props) {
  var [cakeresult, setCakes] = useState([]);   
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        console.log("search api", response.data);
        setCakes(response.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query.q]);

  return (
    <div>
    <div className="row">
      {cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}
      {cakeresult.length<=0 && <div>
        !Sorry no reuslt found:
      </div>}
      </div>
    </div>
  );
}

export default Search;
