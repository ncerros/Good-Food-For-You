import React from "react";
import "./jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div
      // style={{ height: 100, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
