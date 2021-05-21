import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Sidebar from "./Sidebar";
import axios from "axios";
import "./Dash.css";

function DashBoard(props) {
  const [allCakes, setCakes] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://apifromashu.herokuapp.com/api/allcakes",
    }).then(
      (response) => {
        console.log(response.data);
        setCakes(response.data.data);

      },
      (error) => {
        console.log(error);
      }
    );
  }, []);



  return (
    <div>
      <Sidebar />

      <div>
        <main
          role="main"
          class="col-md-9 ml-sm-auto col-lg-10 px-md-4 fixed-top"
          style={{ top: "50px", backgroundColor: "#fff",zIndex: 10 }}
        >
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                {/* <button class="btn btn-sm btn-outline-secondary">Sort</button>
                <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  Filter
                </button> */}
              </div>
            <Link to="/Addcake"><button type="button" class="btn btn-secondary"  style={{ backgroundColor:"orange" ,color:"black", border:"1px solid white"}}>Addcake</button></Link>
              {/* <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button> */}
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
        </main>

        {allCakes.map((each, index) => {
          return (
            <main
              role="main"
              class="col-md-9 ml-sm-auto col-lg-10 px-md-4"
              style={{ top: "200px" }}
            >
              <div class="table-responsive" style={{ alignItems: "center" }}>
                <table class="table table-striped table-sm">
                  <tbody style={{ padding: "10px" }}>
                    <tr>
                      <td style={{ width: "50px" }}>{index + 1}</td>
                      <td style={{ width: "100px" }}>
                        <img
                          src={each.image}
                          style={{ height: "50px", width: "50px" }}
                        ></img>
                      </td>
                      <td style={{ width: "150px" }}>{each.name}</td>
                      <td style={{ width: "100px" }}>{each.price}</td>
                      <td style={{ width: "150px" }}>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic example"
                          style={{ cursor: "pointer" }}
                        >
                       <Link to="Editpage"><button type="button" class="btn btn-secondary">+</button></Link> 
                          {/* <button type="button" class="btn btn-secondary">
                            -
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          );
        })}
      </div>
    </div>
  );
}

export default DashBoard;
