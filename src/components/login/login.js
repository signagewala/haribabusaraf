import React, { useState } from "react"
import { Container } from "react-bootstrap"
import axios from "axios"
import "./login.css"
import { useHistory } from "react-router-dom"



const Login = ({ updateUser }) => {

    const history = useHistory()

    var [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handelChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        // axios.post("http://192.168.29.189:8080/posts", user)
        axios.post("http://localhost:5000/posts/login", user)
            .then(res => {
                if (res.data.user) {
                    alert(res.data.message + " " + res.data.user.name)
                    updateUser(res.data.user)
                    history.push("/")
                } else {
                    alert("Incorrect Username or Password retry")
                    history.push("/login")
                }

            })

    }

    return (
        <Container className="login">
            {console.log("User", user)}
            <h1>Login</h1>
            {/* <label for="username">Username</label> */}
            <input type="text" placeholder="username (registered email)" name="email" onChange={handelChange} />
            {/* <label for="password">Password</label> */}
            <input type="password" placeholder="password" name="password" onChange={handelChange} />
            <div className="button" onClick={login}>Login</div>
            {/* <div>or</div>
            <div className="button" onClick={() => history.push({ pathname: "/register" })}>Register</div> */}
        </Container >
    )
}

export default Login