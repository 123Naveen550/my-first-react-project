import { render } from "@testing-library/react";
import {Component} from "react"
class Carousel extends Component{
  constructor(){
    super()
    this.state={

    }
  }

 img="https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
 img1="https://images.unsplash.com/photo-1565987164841-7132b384293b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTM2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
 img2="https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
render()
{
     return(
      <div id="carouselExampleControls" class="carousel slide"  data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={this.img} class="d-block w-100" style={{height:"550px"}} alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={this.img1} class="d-block w-100" style={{height:"550px"}} alt="..."></img>
        </div>
        <div class="carousel-item">
          <img src={this.img2} class="d-block w-100" style={{height:"550px"}} alt="..."></img>
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

