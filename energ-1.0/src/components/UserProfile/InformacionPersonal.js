import React, { Component } from "react";

class InformacionPersonal extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>This is Informacion Personal</div>;
  }
}

export default InformacionPersonal;