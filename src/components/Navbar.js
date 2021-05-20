import {Component} from "react"
import { connect } from "react-redux"
import {Link} from "react-router-dom"
class Navbar extends Component{
    constructor(){
        super()
        this.state={
          searchtext:undefined,
        }
    }
    searchtext
    getSearchtext=(event)=>{
      this.searchtext=event.target.value
      this.setState({
        searchtext:this.searchtext
      })
    }
    // componentDidMount(){
    //   this.setState({
    //     token:localStorage.getItem("tokenId"),
    //     isToken:true
      
    //   },()=>{console.log(this.state.token)})
     
    // }
    logout = () => {
      localStorage.clear()  
          window.location.href="/Home"     
    }

render(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" style= {{backgroundColor:"#D9456D", zIndex:30}}>
  <div class="container-fluid">
   <Link to="/Home"><a class="navbar-brand" href="#" style={{color:"white"}} >My Cake Shop</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li> <a class="dropdown-divider"></a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" onChange={this.getSearchtext} type="search" placeholder="Search" aria-label="Search"></input>
       <Link to={`/Search?q=${this.searchtext}`}><button class="btn btn-outline-success" type="submit" style={{ margin:"3%",color:"white", border:"1px solid white"}} >Search</button></Link>
       <Link to="/Dashboard"><button type="button" class="btn" style={{marginLeft:"1em",fontSize:"10px", backgroundColor:"white" ,color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi-person-lines-fill" viewBox="0 0 16 16" >
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg></button></Link><br></br>
      </form>
    </div>
  </div>
 <Link to="/Carts"><button type="button" class="btn" style={{margin:"1em",fontSize:"10px", backgroundColor:"white" ,color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-cart3" viewBox="0 0 16 16" >
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></button></Link><br></br>


{this.props.isloggedin && <button type="button" class="btn btn-outline-info" onClick={this.logout.bind(this)}>logout</button>} 
{!this.props.isloggedin && <Link to="/Login"><button type="button" class="btn btn-outline-info">login</button></Link>}
  {/* <Link to="/Myorder"><button type="button" class="btn btn-outline-info" style={{ margin:"4%",color:"white" ,backgroundColor:"brown", border:"1px solid white"}}>Myorder</button></Link> */}
   
  
</nav>
    

  </div>
    )
}

}

export default connect((state,props)=>{
  console.log(state)
  return{
    isloggedin:state["isloggedin"]
  }
}) (Navbar);