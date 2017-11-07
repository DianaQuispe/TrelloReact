import React, { Component } from 'react';
import {connect} from 'redux-zero/react'
import SignIn from "./signIn.js";
import {
  Grid,
  Row,
  Col,
  formGroup,
  FormControl,
  Button
} from "react-bootstrap";

import './MusicApp.css';

const Footer = ({ algo }) => {
  return <div className="footer">
      <footer>
        <small>
          <a href="https://trello.com/" target="_blank">
            Trello
          </a> tribute for educational purposes crafted with ♥ for <a href="https://diacode.com/">Diacode</a>
          by <a href="https://twitter.com/bigardone">@bigardone</a>
        </small>
      </footer>
    </div>;
};

const MusicApp = ({algo}) => {
    return <div>
        <Grid>
          <Row>
            <Col md={4} mdOffset={3}>
              <div>
                <div className="logo" />
                <br />
                <br />
                <SignIn />
              </div>;
            </Col>
          </Row>
          <Footer />
        </Grid>
      </div>;

  }


const mapToProps = ({ algo }) => ({algo});

export default connect(mapToProps) (MusicApp);
