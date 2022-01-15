import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { Button } from 'reactstrap';
import axios from "axios"
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";

// const history = useHistory();

const Registersman = () => {

    var [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const [smanData, setSmanData] = useState([])

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
            axios.post("http://localhost:5000/posts", user)
                .then(res =>
                    alert(res.data.message))
        } else {
            alert("all fields required")
        }
    }

    useEffect(() => {
        getSman()
    }, [])

    const getSman = async () => {
        const smanData = await axios.get("http://localhost:5000/posts")
        console.log(smanData.data);
        setSmanData(smanData.data);
    }

    const editsman = ""



    return (
        <>
            <div className="content">
                <Row>
                    <Container className="register">
                        <h1>Register New Salesman</h1>
                        {/* <label for="username">Username</label> */}
                        <input type="text" placeholder="Name" name="name" value={user.name} onChange={handelChange} />
                        <input type="text" placeholder="Email" name="email" value={user.email} onChange={handelChange} />
                        <input type="password" placeholder="password" name="password" value={user.password} onChange={handelChange} />
                        {/* <label for="password">Password</label> */}
                        <input type="password" placeholder="re-enter password" name="password2" value={user.password2} onChange={handelChange} />
                        <div className="button" onClick={register}>Register</div>
                    </Container>
                </Row>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Registered Sales-Team</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th hidden>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            smanData.map(e => (
                                                <tr>
                                                    <td hidden>{e._id}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.password}</td>
                                                    <td>
                                                        <Button color="info" onClick={editsman}>Edit</Button>{' '}
                                                        <Button color="danger">Delete</Button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Registersman