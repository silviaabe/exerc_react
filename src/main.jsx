import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import ".././global.css";

$(document).ready(function() {
  $('#altura').mask('0.00');
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
