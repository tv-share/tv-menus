import React from "react";
import ReactDOM from "react-dom";

import { Sidebar } from "../src/index";

class Workbench extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const items = [
      {
        id: "1",
        label: "exemplo 1",
        clickAction: () => console.log("exemplo 1")
      },
      {
        id: "2",
        label: "exemplo 2",
        clickAction: () => console.log("exemplo 2")
      },
      {
        id: "3",
        label: "exemplo 3",
        clickAction: () => console.log("exemplo 3")
      }
    ];
    
    return (
      <section className="test-area">
        <Sidebar
          expandable
          isOpen={this.state.isOpen}
          openAction={() => this.setState({ isOpen: !this.state.isOpen })}
          logo="https://vignette.wikia.nocookie.net/logopedia/images/2/29/Windows_95_Logo.svg/revision/latest?cb=20160811163821"
          items={items}
        >
          <button>OLA!</button>
        </Sidebar>
      </section>
    );
  }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

