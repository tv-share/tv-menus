import React from "react";
import ReactDOM from "react-dom";

import { Header } from "../src/index";

class Workbench extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        const items = [
            {
                id: "id 1",
                clickAction: () => console.log("Action1"),
                name: "Item 1"
            },
            {
                id: "id 2",
                clickAction: () => console.log("Action2"),
                name: "Item 2"
            }
        ];

        const options = [
            {
                id: "id 10",
                clickAction: () => console.log("Action1"),
                img: "https://t7.rbxcdn.com/d614151fd257cab3a05e4dc2f60524d4"
            },
            {
                id: "id 9",
                clickAction: () => console.log("Action2"),
                name: "Option 2"
            }
        ];
        return (
            <section className="test-area">
                <Header 
                title="Apple" 
                logo="https://vignette.wikia.nocookie.net/logopedia/images/2/29/Windows_95_Logo.svg/revision/latest?cb=20160811163821"
                clickAction={() => console.log("Click")} 
                items = {items}
                options= {options}/>
            </section>
        )
    }
}

ReactDOM.render(<Workbench />, document.querySelector("#app-container"));

