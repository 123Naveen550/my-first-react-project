import { Component } from "react";
import {cakeDetail} from './CakeDetails'
import { useHistory } from "react-router-dom";
import {axios} from 'axios';
import {Link} from 'react-router-dom';
import queryString from "query-string";


class Cake extends Component {

    
    constructor(props) {
        super(props)
        this.state = {}
        // this.NavigationDemo()
    }

    render() {
        console.log("state,",this.props)

        return (
            
            <div>   
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div class="card" style={{width: "17rem" ,top:"2em",margin:"2rem",border:"3px solid white"}}>
        <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>  
                <p class="card-text">{this.props.cakedata.description}</p>                
                <p class="card-text">{this.props.cakedata.likes}</p>                

          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>  
            </Link>
      
            </div>
        )
    }
}

export default Cake;

