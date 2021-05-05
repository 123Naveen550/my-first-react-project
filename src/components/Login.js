import {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
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
      if(!this.state.login.email.includes("@") && this.state.login.password.length<4){
          this.setState({
              nameErr:"Invaild Email",
              passErr:"password length must be 4 Character"
          })
      }
      else if(!this.state.login.email.includes("@")){
          this.setState({
              nameErr:"Invaild Email"
          })
      }
      else if( this.state.login.password.length<4){
          this.setState({
              passErr:"password length must be 4 Character"
          })
      }
      else{
          return true;
      }
  }
  
  login={}
  
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
              if(res.data){
                  toast("Welcome to Cake Shop");
                  this.props.history.push('/')
                  console.log("response",res);
              }
          },(err)=>{
              toast(" Sorry You enter Wrong details");
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
          <form style={{padding:"10em 27em", backgroundColor:"#ffe4b5"}}>
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
   

export default Login;
