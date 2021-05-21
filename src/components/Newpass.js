import {Component} from "react"
// import {Link} from "react-router-dom"
import axios from "axios";

class Newpass extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    userDetail = {}

    
    getemail = (event) => {
        console.log(event.target.value);
        this.userDetail.email = event.target.value;
    }
    
      Click =(event)=> {
        event.preventDefault()       
          console.log("hello", this.userDetail);
          axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/recoverpassword",
            data:this.userDetail
        }).then((res)=>{
            console.log("response",res);
        },(err)=>{
            console.log("error",err);
        }) 
      }

    render()
    {
        return(
            <div>
            <form style={{padding:"10em 27em"}}>
            
     <div class="form-group">
    <label for="Email">Email</label>
     <input type="Email" onChange={this.getemail}class="form-control" id="exampleInputPassword1" placeholder="Email"></input><br></br>
     </div>   

     <button type="submit" class="btn btn-primary" onClick={this.Click}>Submit</button>
     
            </form>
            
 </div>
        )
    }
}

export default Newpass;
    