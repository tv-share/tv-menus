import React from "react";
import ReactDOM from "react-dom";

import { Sidebar } from "..";

const SidebarExample = ({ isOpen, openAction }) => {
  const sidebarItems = [
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
      label: "exemplo com nome gigantesco 3",
      clickAction: () => console.log("exemplo 3")
    }
  ];

  return (
    <Sidebar
      expandable
      isOpen={isOpen}
      openAction={openAction}
      logo="https://vignette.wikia.nocookie.net/logopedia/images/2/29/Windows_95_Logo.svg/revision/latest?cb=20160811163821"
      items={sidebarItems}
    />
  );
};

export default SidebarExample;