import React from "react";
import Donations from '../../pages/Donations/'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route exact path='/donations' component={Donations} />   
        </Switch>
    </BrowserRouter>
)

export default Routes;