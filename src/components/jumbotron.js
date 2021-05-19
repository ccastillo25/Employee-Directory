import React from "react";
import "../jumbotron.css"

function Jumbotron() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="Random User"></i> <b>Company Directory</b></h1>
        <p className="lead">Search by name/date/origin</p>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;