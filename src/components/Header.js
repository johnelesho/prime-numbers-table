import React from "react";
import logo from "./image/logo192.png";

function Header(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <li className="navbar-brand">
        <img src={logo} alt="Logo" />
      </li>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <form className="form-inline my-2 my-md-0 ml-auto">
          <input
            className="form-control"
            type="Number"
            name="number"
            placeholder="Enter Value"
            onChange={props.handleChange}
          />
        </form>
      </div>
    </nav>
  );
}

export default Header;
