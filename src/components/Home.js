import { render } from "@testing-library/react";
import Carousel from "./Carousel";
import Cake from "./Cake";
import { Component } from "react";
import cakes from "./Data";
import axios from "axios";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cakes: [],
    };
  }

  componentDidMount() {
    let apiurl = "https://apifromashu.herokuapp.com/api/allcakes";
    axios({
      url: apiurl,
      method: "get",
    }).then(
      (response) => {
        console.log("response", response.data);
        this.setState({
          cakes: response.data.data,
        });
      },
      (error) => {
        console.log("error from all cakes api", error);
      }
    );
  }

  render() {
    return (
      <div>
        <Carousel></Carousel>
        <div className="row">
          {this.state.cakes.map((each, index) => {
            return <Cake cakedata={each} />;
          })}
        </div>
      </div>
    );
  }
}
export default Home;
