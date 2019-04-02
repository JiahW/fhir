import React, {Component} from "react";
import {any} from "prop-types";
import {Link} from "react-router";
import ReactDOM from "react-dom";
import axios from "axios";

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

//import './styles/Login.scss';


const loginMessageStyle = {
    color: "red"
};

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginMessage: "",
            email: '',
            password: ""
        };

        this._onLoginSubmit = this._onLoginSubmit.bind(this);
    }

    _onLoginSubmit(event) {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        const nextPath = this.props.nextPathName || "/";

        this.props.manualLogin({
            email,
            password
        }, nextPath)
            .then((loginMessage) => {
                if (loginMessage) {
                    this.setState({
                        loginMessage
                    })
                }
            });
    }

    render() {
        return (
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                  <CardGroup>
                    <Card className="p-4">
                      <CardBody>
                        <Form>
                          <h1>Login</h1>
                          <p className="text-muted">Sign In to your account</p>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Username" autoComplete="username" />
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" autoComplete="current-password" />
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4">Login</Button>
                            </Col>
                            <Col xs="6" className="text-right">
                              <Button color="link" className="px-0">Forgot password?</Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                    <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                      <CardBody className="text-center">
                        <div>
                          <h2>Sign up</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                          <Link to={this.props.registerPath}>
                            <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Container>
          </div>
          /*  <div id="login-parent-container">
                <div id="login-title-container">
                    <h2 id="text">
                        Log in to <strong>FHiR</strong> Visualization
                    </h2>
                    <h5 id="text">
                        <p >{this.props.loginAccountType}</p>
                    </h5>
                </div>
                <div id="login-container">
                    <form id="login-form" onSubmit={this._onLoginSubmit}>
                        {/* <h2 id="login-text">Log in</h2> *     /}
                        Email Address
                        <input className="login-inp" type="email" onChange={e => this.setState({email: e.target.value})}
                               placeholder="Username"/><br />
                        Password
                        <input className="login-inp" type="password"
                               onChange={e => this.setState({password: e.target.value})} placeholder="Password"/><br />
                        <input id="login-submit" type="submit" value={this.props.loginPrompt}/>
                        <p>
                            <Link to={this.props.alternatePath}>{this.props.alternateMessage}</Link>
                        </p>

                        <p>
                            Don&lsquo;t have an account? <Link to={this.props.registerPath}>Sign up</Link>
                        </p>
                    </form>
                    {this.state.loginMessage && (
                        <div id="login-error">
                            {this.state.loginMessage}
                        </div>
                    )}
                </div>
            </div>
*/
        );
    }
}

Login.propTypes = {
    manualLogin: any,
    nextPathName: any,
    registerPath: any,
    alternatePath: any,
    alternateMessage: any,
    loginAccountType: any,
    loginPrompt: any
};
