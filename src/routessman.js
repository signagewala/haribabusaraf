import Dashboard from "views/Dashboard.js";
import Salesform from "views/Salesform.js";
import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
// import Maps from "views/Map.js";
import UserPage from "views/User.js";
import Logout from "views/Logout";
import Registersman from "views/Registersman";
import Ratecard from "views/Ratecard";

var routessman = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon nc-bank",
        component: Dashboard,
        layout: "/sman",
    },
    {
        path: "/ratecard",
        name: "Set Rates",
        icon: "nc-icon nc-bold",
        component: Ratecard,
        layout: "/sman",
    },
    {
        path: "/salesform",
        name: "Sales Order",
        icon: "nc-icon nc-tag-content",
        component: Salesform,
        layout: "/sman",
    },
    {
        path: "/register",
        name: "Sales-Man",
        icon: "nc-icon nc-badge",
        component: Registersman,
        layout: "/sman",
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "nc-icon nc-diamond",
        component: Icons,
        layout: "/sman",
    },
    // {
    //   path: "/maps",
    //   name: "Maps",
    //   icon: "nc-icon nc-pin-3",
    //   component: Maps,
    //   layout: "/sman",
    // },
    {
        path: "/user-page",
        name: "User Profile",
        icon: "nc-icon nc-single-02",
        component: UserPage,
        layout: "/sman",
    },
    {
        path: "/tables",
        name: "Table List",
        icon: "nc-icon nc-tile-56",
        component: TableList,
        layout: "/sman",
    },
    // {
    //   path: "/typography",
    //   name: "Typography",
    //   icon: "nc-icon nc-caps-small",
    //   component: Typography,
    //   layout: "/sman",
    // },
    {
        pro: true,
        path: "/logout",
        name: "Logout",
        icon: "nc-icon nc-button-power",
        component: Logout,
        layout: "/sman",
    },
];
export default routessman;
