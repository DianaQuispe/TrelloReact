import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./App.css";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import SignUp from "./signUp.js";
import Board from "./boards.js";


const Footer = ({ algo }) => {
  return (
    <div className="footer">
      <footer>
        <small>
          <a href="https://trello.com/" target="_blank">
            Trello
          </a>{" "}
          tribute for educational purposes crafted with ♥ for{" "}
          <a href="https://diacode.com/">Diacode</a>
          by <a href="https://twitter.com/bigardone">@bigardone</a>
        </small>
      </footer>
    </div>
  );
};
const Header = ({ algo }) => {
  return (
    <div>
      <div className="logo" />
      <br />
      <br />
    </div>
  );
};
const SignIn = ({ algo }) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col md={4} mdOffset={3}>
            <Header />
            <form>
              <FormGroup>
                <FormControl
                  className="input"
                  type="email"
                  label="Email address"
                  bsSize="sm"
                  value="john@phoenix-trello.com"
                />
                <FormControl
                  className="input" 
                  label="Password"
                  type="password"
                  value="*******"
                />
              </FormGroup>
              <NavLink to="/board">
                <Button className="button" type="submit">
                  Sign In
                </Button>
              </NavLink>
            </form>
            <NavLink to="/signup">
              <p>Create new account</p>
            </NavLink>
          </Col>
        </Row>
        <Footer />
      </Grid>
    </div>
  );
};

const mapToProps = ({ algo }) => ({ algo });

export default connect(mapToProps)(SignIn);
