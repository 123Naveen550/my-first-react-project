import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cake from './components/Cake'
import Registration from './components/Registration'
import Newpass from './components/Newpass'
import Search from './components/Search';
import { ToastContainer, toast } from 'react-toastify';
import Carts from "./components/Carts";
import Dashboard from "./components/Dashboard"
import Editpage from './components/Editpage';
import CakeDetails from './components/CakeDetails';
import Details from './components/Details';
import Product from "./components/Product"



function App() {
  return (
    <div className="App">
   

    <BrowserRouter>
    <Navbar></Navbar>
      <div>
       
        <Route path="/Home" component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/Cake"  exact component= {Cake}></Route>
        <Route path="/Registration" component={Registration}></Route> 
        <Route path="/Newpass" component={Newpass}></Route>
        <Route path="/Search" component={Search}></Route>
        <Route path="/Carts" component={Carts}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>
        <Route path="/Editpage" component={Editpage}></Route>
        <Route exact path="/CakeDetails/:id" exact component={CakeDetails} />
         <Route exact path="/Details/:id" component={Details} />
         <Route path="/Product" component={Product}></Route>
        
        
        

      </div>
    </BrowserRouter>
    <ToastContainer />
    
  
    </div>
  );
}

export default App;
