import { Component } from "react";
import CartSumary from "./CartSumary";
import axios from "axios";
import { Link } from "react-router-dom";


class ConfirmCheckout extends Component {
    constructor(props) {
        super(props)         
        this.state = {
            cake:[]
           }
       }
       // cakes=[]
    componentDidMount() {
        console.log(this.props);
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{ 
           headers:{"authtoken":localStorage.tokenId}
        }).then((res)=>{
            console.log("res",res.data);
       
           this.setState({
               cake:res.data.data
           })
        
        },(err)=>{
            console.log("Error",err);
        })
    }
    
    render() {
        return (
            <div>                
                <div><h1 style={{ marginTop: "2.5em",marginLeft: "2em" }}>Your Cart</h1>
                {
                     this.state.cake.map((ele,index) => {
                    
                       return <CartSumary key={index} cakedata={ele} />                                    
                     })     
                    }
                    <Link to="/cartui"><button type="button" style={{marginLeft:"30em"}} class="btn btn-success">Next</button></Link> 
                </div>
                </div>
        )
    }
}

export default ConfirmCheckout;