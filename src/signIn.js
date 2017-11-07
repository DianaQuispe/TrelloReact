import React, { Component } from "react";
import { connect } from "redux-zero/react";
import "./MusicApp.css";
import { Grid, Row,Col, formGroup, FormControl, Button } from "react-bootstrap";
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

const SignIn = ({ algo }) => {
  return <div>
      <form>
        <formGroup>
          <FormControl className="input" type="email" label="Email address" bsSize="sm" />
          <FormControl className="input" label="Password" type="password" />
        </formGroup>
        <Button className="button" type="submit">
          Sign In
        </Button>
      </form>
      <p>Create new account</p>
    </div>;
};

const mapToProps = ({ algo }) => ({ algo });

export default connect(mapToProps)(SignIn);
