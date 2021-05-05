import { Component } from "react";
import {withRouter} from "react-router-dom"
import axios from "axios";
import Cart from "./Cart"

class Cake extends Component {
  constructor() {
    super();
    this.state = {
    cakes:[]
  }
  }
  CakeDetail=[]
  Cart=(event)=>{
    console.log(event.target);

    if(event.target){
      axios({
        method:"get",
        url:`https://apifromashu.herokuapp.com/api/Cake/${this.props.cakedata.cakeid}`
      }).then((res)=>{
        if(res.data){
          this.CakeDetail.push(res.data.data)
          this.setState({
            cakes:this.CakeDetail
          })
          this.props.history.push('/Cart');
        }
    },(error)=>{
      console.log(error);
    })
    }
  }



  render() {
    return (
      <div>
        <div class="card" style={{width: "15rem" , margin:"1rem"}}>
      <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>     
                <button style={{background:"blue" ,color:"white"}} class="cart-btn" onClick={this.Cart}>Add to Cart</button>           
          
        </div>
    </div>   
      </div>
    );
  }
}

export default withRouter (Cake)
