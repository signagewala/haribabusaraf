import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import SmanLayout from "layouts/Sman";

function Home() {
    const userData = JSON.parse(localStorage.getItem("HbsUser"))
    return (
        <div>
            < BrowserRouter >
                <Switch>
                    <Route path="/admin" render={(props) => <AdminLayout {...props} />}>
                    </Route>
                    <Route path="/sman" render={(props) => <SmanLayout {...props} />}>
                    </Route>
                    <Redirect to={(userData.email === "nitin6353@gmail.com") ? "/admin/dashboard" : "/sman/salesform"} />
                </Switch>
            </BrowserRouter >,

        </div>
    );
}

export default Home;
