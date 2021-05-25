import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { toast } from 'react-toastify'

class Product extends Component {
    constructor() {
        super()
        this.state = {
        quantity:1,
        cakeInfos:[]
        }
    }
    // for store all cake details
    cakeinfos=[]
    componentDidMount() {
        this.cakeinfos.push(this.props.cakecart);
        this.setState({
            cakeInfos:this.cakeinfos
        })
    }
    

    remove = () => {
        // console.log(this.props.cakecart)
        this.setState({isloading:true})
        axios.post('https://apifromashu.herokuapp.com/api/removecakefromcart', { cakeid: this.props.cakecart.cakeid },  //404 cakeid: 
            { headers: { "authtoken": localStorage.tokenId } })
            .then((res) => {            
            // console.log(res.data);      
            if(res.data.message === "Removed  item from cart"){
                toast.warn("Item is removed");
                this.setState({
                    cakeinfos:this.cakeinfos.splice(0,1)
                })         
                window.location.href="/Carts"
            }
            else{
                toast.warn("Cake not found")// it a msg do not be 
            }
        }, (err) => {
            console.log(err)
        })
    }

    add=()=>{
        this.setState({
            quantity:this.state.quantity+1
        })

    }

    subtract=()=>{
        this.setState({
            quantity:this.state.quantity-1
        })

    }

    
    
    render() {
        return (<div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{top:"6em" ,right:"9em"}}>            
        <table class="table">   
   <tbody>
     <tr>
     <td style={{width:"90px"}}><img style={{height:"50px",width:"50px"}} src={this.props.cakecart.image} class="card-img-top" alt="..."></img></td>
       <td style={{width:"20px"}}>{this.props.cakecart.name}</td>
       <td style={{ width: "85px" }}>Rs{this.props.cakecart.price}</td>     
       <td  style={{ width: "90px"}}><button type="button" class="btn" onClick={this.add}>+</button>{this.state.quantity}<button type="button" class="btn" onClick={this.subtract} disabled={this.state.quantity < 2}>-</button></td>                             
       <td style={{ width:"135px"}}>
       <button type="button" style={{left:"1em",color:"black" ,backgroundColor:"white"  }} onClick={this.remove} class="btn-group btn-group-sm border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
   <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
 </svg></button>  
     </td>
     </tr>  
   </tbody>  
   </table>              
        </div>
 
 
        )
    }
}
export default  Product

