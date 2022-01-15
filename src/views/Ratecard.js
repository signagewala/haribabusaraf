import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// reactstrap components
import { Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, Table, Input, Row, Col } from "reactstrap";
import axios from "axios"

function Ratecard() {

    //code to store form data values which then sent to backend 
    const [formData, setFormData] = useState({
        metal1: "Gold",
        metal2: "Silver",
        silverrt: "",
        goldrt: ""
    })
    const handelChange = e => {
        // console.log(e)
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    //code to send form values to backend
    const saverates = () => {
        const { metal1, goldrt, metal2, silverrt } = formData
        if (goldrt && silverrt) {
            axios.post("http://localhost:5000/posts/rates", formData)
                // axios.post("http://localhost:8080/posts/rates", formData)
                .then(res =>
                    alert(res.data.message))
        } else {
            alert("Both Rates are Required")
        }
    }

    // code to retrieve last metal rate
    const [rateData, setRateData] = useState([])
    // console.log(userData.name);
    useEffect(() => {
        getRates()
    }, [])

    const getRates = async () => {
        // const rData = await axios.get("http://localhost:8080/posts/rates")
        const rData = await axios.get("http://localhost:5000/posts/rates")
        setRateData(rData.data);
        console.log(rateData);
    }
    // code to retrieve last 30 metal rate
    const [allRateData, setAllRateData] = useState([])
    // console.log(userData.name);
    useEffect(() => {
        getAllRates()
    }, [])

    const getAllRates = async () => {
        // const arData = await axios.get("http://localhost:8080/posts/ratesdatewise")
        const arData = await axios.get("http://localhost:5000/posts/ratesdatewise")
        setAllRateData(arData.data);
        console.log(rateData);
    }




    return (
        <>
            {/* {console.log(formData)} */}
            <div className="content">
                <Col md="12">
                    <Card className="card-user">
                        <CardHeader>
                            <CardTitle tag="h5">Set Rates</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Container>
                                <Form>
                                    <Row>
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th>Metal</th>
                                                    <th>Set New Rate</th>
                                                    <th>Unit</th>
                                                    <th>Current Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Input
                                                        defaultValue="Gold"
                                                        plaintext
                                                        hidden
                                                        type="text" name="metal1"
                                                    />Gold</td>
                                                    <td><Input
                                                        placeholder="Gold Rate / 10Grams"
                                                        onChange={handelChange}
                                                        type="number" name="goldrt"
                                                    />  </td>
                                                    <td>/10grams</td>
                                                    <td>{
                                                        rateData.map(e => (
                                                            <p> {e.goldrt}</p>
                                                        ))
                                                    }</td>
                                                </tr>
                                                <tr>
                                                    <td><Input
                                                        defaultValue="Silver"
                                                        plaintext
                                                        hidden
                                                        type="text" name="metal2"
                                                    />Silver</td>
                                                    <td><Input
                                                        placeholder="Gold Rate / 10Grams"
                                                        onChange={handelChange}
                                                        type="number" name="silverrt"
                                                    />  </td>
                                                    <td>/Kg</td>
                                                    <td>{
                                                        rateData.map(e => (
                                                            <p> {e.silverrt}</p>
                                                        ))
                                                    }</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1 text-center" md="12">
                                            <div>
                                                <Button
                                                    className="btn-round"
                                                    color="primary"
                                                    type="button"
                                                    onClick={saverates}>Save Rates</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle tag="h4">Metal Rates History</CardTitle>
                                                </CardHeader>
                                                <CardBody>
                                                    <Table responsive>
                                                        <thead className="text-primary">
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>Gold Rate</th>
                                                                <th>Silver Rate</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allRateData.map(e => (
                                                                    <tr>
                                                                        <td>{e.date}</td>
                                                                        <td>{e.goldrt}</td>
                                                                        <td>{e.silverrt}</td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </Table>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Form>
                            </Container>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        </>
    );
}

export default Ratecard;
