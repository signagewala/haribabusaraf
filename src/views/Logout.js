import React from "react";
import { useHistory } from "react-router-dom"

// reactstrap components
import {
  Button,
  Row,
  Col,
} from "reactstrap";

const Logout = () => {

  const history = useHistory();

  const logout = () => {
    window.localStorage.removeItem('HbsUser');
    window.location.href = "/login"
  }


  return (
    <>
      <div className="content">
        <h1>Logout Now</h1>
        <Button onClick={logout}>Logout</Button>
      </div >
    </>
  );
}

export default Logout;
