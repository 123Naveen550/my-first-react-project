import {Component} from "react"
import {Link} from "react-router-dom"
class Navbar extends Component{
    constructor(){
        super()
        this.state={
          searchtext:undefined
        }
    }
    searchtext
    getSearchtext=(event)=>{
      this.searchtext=event.target.value
      this.setState({
        searchtext:this.searchtext
      })
    }

render(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" style= {{backgroundColor:"#ffefd5",zIndex:30}}>
  <div class="container-fluid">
   <Link to="/Home"><a class="navbar-brand" href="#">My Cake Shop</a></Link>
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
       <Link to={`/Search?q=${this.searchtext}`}><button class="btn btn-outline-success" type="submit">Search</button></Link>
      </form>
    </div>
  </div>
  <Link to="/login"><button class="btn btn-outline-success" type="submit">Login</button></Link><br></br>
  <Link to="/Dashboard"><button class="btn btn-outline-success" type="submit">DashBoard</button></Link><br></br>
</nav>
    

        </div>
    )
}

}

export default Navbar;