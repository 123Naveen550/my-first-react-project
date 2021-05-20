import axios from 'axios';
import React, { Component } from 'react'
import Product from './Product';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

 class Carts extends Component {
     constructor(props) {
         super(props)
         
         this.state = {
             cake:[]
            }
        }
     componentDidMount() {
         console.log(this.props);
         axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{ //image not working here
            headers:{"authtoken":localStorage.tokenId}
         }).then((res)=>{
             console.log("res",res.data);
             this.props.dispatch({
                type:"NewOrder",
                payload:res.data
             })
            this.setState({
                cake:res.data.data,
                
            })
         },(err)=>{
             console.log("Error",err);
         })
     }
     
     
    render() {
        return (
            <div> 
            <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{top:"6em" ,right:"11em"}}> 
         <Link to="/Routes"><button type="button" class="btn btn-primary">CheckOut</button></Link> 
            <table class="table">
                     <thead>
                        <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
            </table>
                </div>

                    <div  className="row">
                  {this.state.cake.map((ele)=>{
                      return <Product cakecart={ele}/>
                  })}
                    </div>
                </div>
    
    
        )
    }
}
export default connect((state, props) => {
    console.log(state)
    return {
      NewOrder:state["NewOrder"]
    }
}) (Carts) ;

