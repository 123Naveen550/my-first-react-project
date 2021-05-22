import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import { toast } from "react-toastify";

 class CheckOut extends Component {
     constructor(props) {
         super(props)
         this.state={
            
            
         }
     }
     total=0
     cakes=[]
     message={}
    componentDidMount() {
  
        this.props.NewOrder.data.map((each)=>{
    
             this.cakes.push(each.name);
            this.total=this.total+each.price;
        });
        console.log(this.cakes)
        console.log(this.total);  
        this.placeOrder.price=this.total
        this.placeOrder.cakes=this.cakes
    }
    placeOrder={}

     userName=(event)=>{
        this.placeOrder.name=event.target.value
     }   
     address=(event)=>{
        this.placeOrder.address=event.target.value
     }
     city=(event)=>{
         this.placeOrder.city=event.target.value
     }
     pin=(event)=>{
         this.placeOrder.pincode=event.target.value
     }
     phone=(event)=>{
        this.placeOrder.phone=event.target.value
    }
    
    orderPlace=(event)=>{
        event.preventDefault()
        console.log(this.placeOrder);     
        let apiurl="https://apifromashu.herokuapp.com/api/addcakeorder"
        axios({
            method:"post",
            url:apiurl,
            data:this.placeOrder,
            headers:{"authtoken":localStorage.tokenId}
        }).then((res)=>{
            console.log(res.data)
            this.message = res.data;
            if(this.message.message !== 'All fill Entry'){
                toast("Your order placed");                    
                console.log("message ;.....",this.message);
            }
        },(err)=>{console.log(err)
        })
    }

    
    render(){
        return (
            <div>
      <div>        
         <main role="main" class=" ml-sm-auto col-lg-9">
          <div class="table-responsive" >
          <form   style={{ marginTop: "10em", width: "60vw" }}>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault01" style={{ width: "50vw", fontSize: "1em" }}>Name</label>
                  <input type="text" onChange={this.userName.bind(this)} class="form-control" style={{ width: "50vw", height: "3em" }} id="validationDefault01" placeholder="First name" required />
           
                  </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault02" style={{ width: "50vw", fontSize: "1em" }}>Phone</label>
                  <input type="number" onChange={this.phone.bind(this)} class="form-control" style={{ width: "50vw", height: "3em" }} id="validationDefault02" placeholder="Phone" required />
           
                  </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault03" style={{ width: "50vw", fontSize: "1em" }}>Address</label>
                  <input type="text" onChange={this.address.bind(this)} class="form-control" style={{ width: "50vw", height: "3em" }} id="validationDefault03" placeholder="Address" required />
           
                  </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault04">City</label>
                  <input type="text" class="form-control" onChange={this.city.bind(this)} id="validationDefault04" placeholder="City" required />
           
                  </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Pincode</label>
                  <input type="number" class="form-control" onChange={this.pin.bind(this)} id="validationDefault05" placeholder="Pin Code" required />
           
                  </div>
              </div>
              <button class="btn btn-primary" type="submit" onClick={this.orderPlace} style={{ marginRight: "2em", marginTop: "1em" }}>Submit</button>
            </form>
          </div>
        </main>       
        </div>
        {/* <div>
          {
            this.cakeoderlist.map((ele,index)=>{
              return (
                <OrderList key={index} cakedata={ele} />
            )
            })
          }
        </div> */}
        </div>
        )
    }
}
export default connect((state,props)=>{

return{
    NewOrder:state["orderplace"]
}
})(CheckOut)