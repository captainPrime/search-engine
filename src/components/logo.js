import React from "react";
import logo from "../assets/images/goog.png";
function Logo(props) {
  return (
    <div>
      <a href="/">
        <img
          width={props.width}
          style={{ margin: "15px" }}
          src={logo}
          alt="google img"
        />
      </a>
    </div>
  );
}
export default Logo;
