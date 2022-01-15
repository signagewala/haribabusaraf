import React, { useState, useEffect } from "react";
import axios from "axios"
// reactstrap components
import { Button, Card, CardHeader, CardBody, CardTitle, FormGroup, Form, InputGroup, InputGroupAddon, Input, Row, Col } from "reactstrap";




function Salesform() {

  const userData = JSON.parse(localStorage.getItem("HbsUser"))

  // console.log(userData.name);

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

  var [formData, setFormData] = useState({
    metal: "",
    sman: userData.name,
    cname: "",
    cphn: "",
    cadd: "",
    itm: "",
    itmdsc: "",
    wt: "",
    // silverrt: "78080",
    // goldrt: "47600",
    rt: "",
    amount: "",
    discount: "",
    labour: "",
    gamount: "",
    famount: ""
  })

  const handelChange = e => {
    // console.log(e)
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

  }

  const labourg = (formData.wt == 0) ? 0
    : (formData.wt < 6) ? 250
      : (formData.wt < 11) ? Math.round(formData.wt * 50)
        : (formData.wt < 16) ? Math.round(formData.wt * 75)
          : Math.round(formData.wt * 100)

  const labourghm = Math.round(formData.wt * formData.rt / 10 * .10)

  const labourslv = Math.round(formData.wt * formData.rt / 1000 * .10)

  const saveBtn = {
    display: "none"
  };

  const saveBtnsh = {
    display: "block"
  };




  return (
    <>
      {/* {console.log(formData)} */}
      <div className="content">
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="i">Estimate created by:<h2>{formData.sman}</h2></CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Metal</label>
                      <Input type="select" name="metal" onChange={handelChange}>
                        <option selected>Select Metal</option>
                        <option>Gold</option>
                        <option>Gold75HM</option>
                        <option>Gold916HM</option>
                        <option>Silver</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <Input
                        Value={formData.sman}
                        plaintext
                        hidden
                        placeholder="Salesman"
                        onChange={handelChange}
                        type="text" name="sman"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="2">
                    <FormGroup>
                      <label>
                        Date
                      </label>
                      <Input disabled plaintext
                        defaultValue={new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()}
                        type="text" />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="2">
                    <FormGroup>
                      <label>
                        Time
                      </label>
                      <Input disabled plaintext
                        defaultValue={new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}
                        type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <FormGroup>
                      <Input
                        placeholder="Customer Name"
                        type="text" name="cname" value={formData.cname} onChange={handelChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="6">
                    <FormGroup>
                      <Input
                        placeholder="Phone Number (Optional)"
                        type="tel" name="cphn" value={formData.cphn} onChange={handelChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <Input
                        placeholder="Customer's Address (Optional)"
                        type="text" name="cadd" value={formData.cadd} onChange={handelChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <FormGroup>
                      <label>Select Item</label>
                      <Input type="select" name="itm" value={formData.itm} onChange={handelChange}>
                        <option selected>Select Item</option>
                        <option>Ring</option>
                        <option>Bangles</option>
                        <option>Tops</option>
                        <option>Nosepin</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="4">
                    <FormGroup>
                      <label>Item Description</label>
                      <Input type="select" name="itmdsc" onChange={handelChange}>
                        <option selected>Select Design</option>
                        <option>aam</option>
                        <option>phool</option>
                        <option>bunda</option>
                        <option>mor</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="4">
                    <FormGroup>
                      <label>Weight</label>
                      <Input className="text-right" placeholder="grams" type="number" step=".001" name="wt" value={formData.wt} onChange={handelChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="pr-1" md="4">

                  </Col>
                  <Col className="px-1" md="6">

                  </Col>
                  <Col className="pl-1" md="2">
                    <FormGroup>
                      <label>Today's Rate</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                        <Input className="text-right" name="rt" plaintext disabled
                          value={(formData.metal === "Gold")
                            ? formData.rt = rateData.map(e => (e.goldrt * .89))
                            : (formData.metal === "Gold75HM")
                              ? formData.rt = rateData.map(e => (e.goldrt * .90))
                              : (formData.metal === "Gold916HM")
                                ? formData.rt = rateData.map(e => (e.goldrt * .98))
                                : (formData.metal === "Silver")
                                  ? formData.rt = rateData.map(e => (e.silverrt))
                                  : "0"} value={formData.rt} />
                        <InputGroupAddon addonType="append">{(formData.metal === "Gold")
                          ? "/10grm"
                          : (formData.metal === "Gold75HM")
                            ? "/10grm"
                            : (formData.metal === "Gold916HM")
                              ? "/10grm"
                              : (formData.metal === "Silver")
                                ? "/kg"
                                : "-"}</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="8">

                  </Col>
                  <Col className="pr-1" md="1">
                    <FormGroup>
                      <label>Metal Value</label>
                      <Input plaintext disabled name="amount"
                        value={(formData.metal === "Gold")
                          ? formData.amount = Math.round(rateData.map(e => (e.goldrt)) / 10 * formData.wt * .89)
                          : (formData.metal === "Gold75HM")
                            ? formData.amount = Math.round(rateData.map(e => (e.goldrt)) / 10 * formData.wt * .89)
                            : (formData.metal === "Gold916HM")
                              ? formData.amount = Math.round(rateData.map(e => (e.goldrt)) / 10 * formData.wt * .98)
                              : (formData.metal === "Silver")
                                ? formData.amount = Math.round(rateData.map(e => (e.silverrt)) / 1000 * formData.wt)
                                : "0"} />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="1">
                    <FormGroup>
                      <label>Labour</label>
                      <Input name="amount"
                        value={(formData.metal === "Gold")
                          ? formData.labour = labourg
                          : (formData.metal === "Gold75HM")
                            ? formData.labour = labourg
                            : (formData.metal === "Gold916HM")
                              ? formData.labour = labourghm
                              : (formData.metal === "Silver")
                                ? formData.labour = labourslv
                                : "0"} />
                    </FormGroup>
                  </Col>
                  <Col className="pl-1" md="2">
                    <FormGroup>
                      <label>Gross Total</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                        <Input className="text-right" plaintext disabled name="amount"
                          value={formData.gamount = formData.amount + formData.labour} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">

                  </Col>
                  <Col className="px-1" md="6">

                  </Col>
                  <Col className="pl-1" md="2">
                    <FormGroup>
                      <label>Discount</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                        <Input className="text-right" type="number" name="discount" onChange={handelChange} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">

                  </Col>
                  <Col className="px-1" md="5">

                  </Col>
                  <Col className="pl-1" md="3">
                    <FormGroup>
                      <label className="text-success"><h4>Final Estimate</h4></label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">Rs.</InputGroupAddon>
                        <Input className="text-right text-success" plaintext disabled name="famount"
                          value={(formData.discount < formData.labour * .5)
                            ? formData.famount = formData.gamount - formData.discount
                            : formData.famount = "NA"} />
                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-1 text-right" md="6">
                    <div style={(formData.famount === "NA") ? saveBtn : saveBtnsh}>
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit">Save Order</Button>
                    </div>
                  </Col>
                  <Col className="pl-1" md="6">
                    <div>
                      <Button
                        className="btn-round"
                        color="secondary"
                        type="refresh">Reset</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
}

export default Salesform;
