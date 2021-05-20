import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Sidebar from './Sidebar'
import CartSumary from './CartSumary'
import ConfirmCheckout from './ConfirmCheckout'
import CartUi from './CartUi'

function Routes() {
    return (
        <div>
            <ConfirmCheckout/>
        <div>
        <BrowserRouter>
            <Sidebar/>
            <Switch>
                <Route path="/CartSumary" exact component={CartSumary}/>
                <Route path="/CartUi" component={CartUi}/>
            </Switch>
        </BrowserRouter>
        </div>
        </div>
    )
}

export default Routes;