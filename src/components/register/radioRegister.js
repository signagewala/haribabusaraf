// this is abackup for register pageXOffset

import React, { useState } from "react"
import { Container } from "react-bootstrap"
import axios from "axios"
import "./register.css"
import { useHistory } from "react-router-dom"

// const history = useHistory();

const Register = () => {

    const history = useHistory()


    var [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const handelChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, password2 } = user
        if (name && email && password && (password === password2)) {
            // axios.post("http://192.168.29.189:8080/posts", user)
            axios.post("http://localhost:5000/posts", user)
                .then(res =>
                    alert(res.data.message))
            history.push("/login")
        } else {
            alert("all fields required")
        }
    }

    return (
        <Container className="register">
            <h1>Register</h1>
            {/* <label for="username">Username</label> */}
            <input type="text" placeholder="Name" name="name" value={user.name} onChange={handelChange} />
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handelChange} />
            <input type="password" placeholder="password" name="password" value={user.password} onChange={handelChange} />
            {/* <label for="password">Password</label> */}
            <input type="password" placeholder="re-enter password" name="password2" value={user.password2} onChange={handelChange} />
            <div className="button" onClick={register}>Register</div>
        </Container>
    )
}

export default Register