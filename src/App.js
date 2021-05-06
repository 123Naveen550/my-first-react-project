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
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard"
import Editpage from './components/Editpage';


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
        <Route path="/Cart" component={Cart}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>
        <Route path="/Editpage" component={Editpage}></Route>
        
        

      </div>
    </BrowserRouter>
    <ToastContainer />
    
  
    </div>
  );
}

export default App;
