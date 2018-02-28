import React from "react";
import ReactDOM from "react-dom";
import "../src/style/_index";

import { SidebarExample, HeaderExample } from "../src/index";

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
        <SidebarExample
          isOpen={this.state.isOpen}
          openAction={() => this.setState({ isOpen: !this.state.isOpen })}
        />
      </section>
    );
  }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

