import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/login/login.js'
import Register from './components/register/register.js'
import Registertest from './components/register/testregister'
import Home from './home.js'

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function App() {
    const [user, setLoginUser] = useState()

    useEffect(() => {
        setLoginUser(JSON.parse(localStorage.getItem("HbsUser")))
    }, [])


    const updateUser = (user) => {
        localStorage.setItem("HbsUser", JSON.stringify(user))
        setLoginUser(user)
    }


    return (
        <div>
            < BrowserRouter >
                <Switch>
                    <Route exact path='/'>
                        {
                            user && user._id ? <Home updateUser={updateUser} /> : <Login updateUser={updateUser} />
                        }
                    </Route>
                    <Route path='/login'><Login updateUser={updateUser} /></Route>
                    <Route path='/register'><Register /></Route>
                    <Route path='/registertest'><Registertest /></Route>
                </Switch>
            </BrowserRouter >,

        </div>
    );
}

export default App;
