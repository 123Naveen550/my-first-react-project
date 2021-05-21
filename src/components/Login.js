import {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
import { connect } from "react-redux"
class Login extends Component{

  constructor(){
      super()
      this.state={
          login:{},
          nameErr:"",
          passErr:""
      }
  }

  vaild=()=>{
      if(this.state.login.email==="" && !this.state.login.email.includes("@") && this.state.login.password.length<4){
          this.setState({
              nameErr:"Invaild Email",
              passErr:"password length must be 4 Character"
          })
      }
      else if(this.state.login.email==="" && !this.state.login.email.includes("@")){
          this.setState({
              nameErr:"Invaild Email"
          })
      }
      else if( this.state.login.email==="" && this.state.login.password.length<4){
          this.setState({
              passErr:"password length must be 4 Character"
          })
      }
      else{
          return true;
      }
  }
  
  login={}
  message={}
  
  getemail=(event)=>{ 
      this.login.email=event.target.value
      this.setState({
          login:this.login
      })
  }
  getpassword=(event)=>{
      this.login.password=event.target.value;
      this.setState({
          login:this.login
      })
  }

  fetchuseraxios=(e)=>{
      this.setState({
          nameErr:"",
          passErr:""
      })
      e.preventDefault();
      if(this.vaild()){ 
          console.log(this.state.login);
          axios({
              method:"post",
              url:"https://apifromashu.herokuapp.com/api/login",
              data:this.state.login    

          }).then((res)=>{
            localStorage.setItem("tokenId",res.data.token)
            console.log(res.data)
            this.message = res.data;
            if(this.message.message !== 'Invalid Credentials'){
                toast("Welcome to CakeShop");                    
                console.log("message ;.....",this.message);
                this.props.dispatch({
                    type:"LOGIN",
                    payload:res.data

                })
                this.props.history.push('/');
            } else {
                toast("Please Check Your Email or Password");
            } 
          },(err)=>{
              toast("Please enter all details");
          })            
      }   
      else{
          toast("please Check details");
      }     
  }

      

    render()
    {
        return(
          <div>
          <form style={{padding:"10em 27em" ,color:"black"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={this.getemail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={this.getpassword}class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  
    <button type="submit" class="btn btn-primary" onClick={this.fetchuseraxios}>Submit</button>

    <p className="SignUp"></p>
  <Link to="/Registration">SignUp</Link>

  <p className="forget password text-center"></p>
  <Link to="/Newpass">Forget password?</Link>
 

</form>
    

</div>
          )
    }
  }
   

export default connect() (Login);

