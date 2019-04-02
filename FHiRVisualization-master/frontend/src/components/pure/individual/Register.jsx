import React, { Component } from "react";
import ReactDOM from "react-dom";
import { any } from "prop-types";
//import '../styles/Register.scss';
import { Button, Card,CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const registerMessageStyle = {
    color: "red"
};


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerMessage: "",
            email: "",
            password: ""
        };

        this._onRegisterSubmit = this._onRegisterSubmit.bind(this);
    }

    _onRegisterSubmit(event) {
        event.preventDefault();
        const email = this.state.email;
        const name = this.state.name;
        const password = this.state.password;

        this.props.manualRegister({
            email,
            name,
            password
        })
            .then((registerMessage) => {
                if (registerMessage) {
                    this.setState({
                        registerMessage
                    });
                }
            });
    }

    render() {
        return (
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                  <Card className="mx-4">
                    <CardBody className="p-4">
                      <Form>
                        <h1>Register</h1>
                        <p className="text-muted">Create your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Username" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Email" autoComplete="email" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="new-password" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                        </InputGroup>
                        <Button color="success" block>Create Account</Button>
                      </Form>
                    </CardBody>
                    <CardFooter className="p-4">
                      <Row>
                        <Col xs="12" sm="6">
                          <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                        </Col>
                        <Col xs="12" sm="6">
                          <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

            /*<div id="register-parent-container">
                </*div id="register-container">
                    <form id="register-form" onSubmit={this._onRegisterSubmit}>
                        //{/* <h2>Register</h2> }
                        <input className="register-inp" type="name" onChange={e => this.setState({ name: e.target.value })} placeholder="Name" /><br />
                        <input className="register-inp" type="email" onChange={e => this.setState({ email: e.target.value })} placeholder="Email" /><br />
                        <input className="register-inp" type="password" onChange={e => this.setState({ password: e.target.value })} placeholder="Password" /><br />
                        <input id="register-submit" type="submit" value="Register" />
                    </form>
                    {this.state.registerMessage && (
                        <div id="register-error">{this.state.registerMessage}</div>
                    )}
                </div>
            </div> */
        );
    }
}

Register.propTypes = {
    manualRegister: any
};
