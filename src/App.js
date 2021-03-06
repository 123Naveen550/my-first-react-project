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
import CheckOut from './components/CheckOut';
import checkout from './components/CheckOut';
import Myorder from './components/Myorder'
import Addcake from './components/Addcake'
import Routes from './components/Routes';
import CartUi from './components/CartUi';




function App() {
  return (
    <div className="App">
   

    <BrowserRouter>
    <Navbar></Navbar>
      <div>
       
        <Route path="/" exact component={Home}></Route>
        <Route path="/Login" exact component={Login}></Route>
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
         <Route path="/CheckOut" component={CheckOut}></Route>
         <Route path="/Myorder" component={Myorder}></Route>
         <Route path="/Addcake" component={Addcake}></Route>
         <Route exact path="/Routes" component={Routes}/>
         <Route path="/CartUi" component={CartUi}/>
         
        
        
        

      </div>
    </BrowserRouter>
    <ToastContainer />
    
  
    </div>
  );
}

export default App;
