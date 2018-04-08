import React from "react";
import ReactDOM from "react-dom";

import SidebarExample from "../examples/SidebarExample";
import HeaderExample from "../examples/HeaderExample";

class Workbench extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    
    
    return (
      <section className="test-area">
        <HeaderExample />
      </section>
    );
  }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

