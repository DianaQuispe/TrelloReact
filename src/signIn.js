import React, { Component } from "react";
import FieldGroup from "react-bootstrap";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <FieldGroup
          type="email"
          label="Email address"
          value="john@phoenix-trello.com"
        />
      </form>
    );
  }
}
export default Form;
