import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
        Nav start
      <ul>
        <li>
          <NavLink exact to="/" className="textLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/map" className="textLink">
            Map
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/mypage" className="textLink">
            Mypage
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/signin" className="textLink">
            Login
          </NavLink>
        </li>
      </ul>
      Nav out
    </div>
  );
}

export default Nav;
