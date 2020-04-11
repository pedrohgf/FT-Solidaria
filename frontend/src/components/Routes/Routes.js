import React from "react";
import Donations from '../../pages/Donations/'
import RegisterNGO from '../../pages/RegisterNGO/'
import SignIn from '../../components/SignIn/'
import RegisterUser from '../../pages/RegisterUser/'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
        <Switch> 
            <Route exact path='/' component={SignIn} />
            <Route exact path='/signup' component={RegisterUser} /> 
            <Route exact path='/donations' component={Donations} />   
            <Route exact path='/ong/cadastramento' component={RegisterNGO} />
        </Switch>
    </BrowserRouter>
)

export default Routes;