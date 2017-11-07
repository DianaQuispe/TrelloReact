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

const Boards = ({algo}) => {
  return (
      <div>
        <Col md={3}>
            <div className="boards">
                asd
            </div>    
        </Col>
     </div>
  );
};

const Board = ({ algo }) => {
  return (
    <Grid className='board' >
      <Row>
        <h3>My boards</h3>
        <Boards algo={algo}/>
      </Row>
    </Grid>
  );
};

const mapToProps = ({ algo }) => ({ algo });

export default connect(mapToProps)(Board);
