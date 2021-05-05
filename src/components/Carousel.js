import { render } from "@testing-library/react";
import {Component} from "react"
class Carousel extends Component{
  constructor(){
    super()
    this.state={

    }
  }

 img="https://i.pinimg.com/originals/73/f3/ff/73f3ff257e3061746011296129eb4cf4.jpg"
 img1="https://i.pinimg.com/originals/0d/8e/05/0d8e0511167cbb045d7564e433b75fd8.jpg"
 img2="https://i.ytimg.com/vi/0ne4cjqOGN8/maxresdefault.jpg"
render()
{
     return(
      <div id="carouselExampleControls" class="carousel slide"  data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={this.img} class="d-block w-100" style={{height:"450px"}} alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={this.img1} class="d-block w-100" style={{height:"450px"}} alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={this.img2} class="d-block w-100" style={{height:"450px"}} alt="..."></img>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
}
}
export default Carousel;

