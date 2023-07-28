import React, { useState } from "react";

import "./Loading.css";
function Loading() {
  return (
    <div className="loading">
      <div id="page">
        <div id="container">
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="ring"></div>
          <div id="h3">loading</div>
        </div>
      </div>
    </div>
  );
}
export default Loading;
