import React from "react";
import ReactDOM from "react-dom";

import { Sidebar } from "../src/index";

const SidebarExample = ({ expandable }) => {
  const sidebarItems = [
    {
      id: "1",
      label: "Usuários",
      clickAction: () => console.log("exemplo 1"),
      icon: "https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_account_circle_white_24px.svg"
    },
    {
      id: "2",
      label: "Relatórios",
      clickAction: () => console.log("exemplo 2"),
      icon: "https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_feedback_white_24px.svg"
    },
    {
      id: "3",
      label: "Configurações dos Bagulhos",
      clickAction: () => console.log("exemplo 3"),
      icon: "https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_settings_white_24px.svg"
    }
  ];

  return (
    <Sidebar
      expandable={expandable}
      items={sidebarItems}
    />
  );
};

export default SidebarExample;