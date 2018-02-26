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
    return (
      <section className="test-area">
        <Sidebar
          logo="https://vignette.wikia.nocookie.net/logopedia/images/2/29/Windows_95_Logo.svg/revision/latest?cb=20160811163821"
          items={[
            {
              id: "1",
              label: "exemplo 1",
              clickAction: () => console.log("exemplo 1")
            },
            {
              id: "2",
              label: "exemplo 2",
              clickAction: () => console.log("exemplo 2")
            }
          ]}
        />
      </section>
    );
  }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

