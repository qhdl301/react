import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const dartTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const whiteTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={dartTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
