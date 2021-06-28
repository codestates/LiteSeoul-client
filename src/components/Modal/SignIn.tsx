import React from "react";
import { NavLink } from "react-router-dom";

function SignIn() {
  return (
    <div className="SignInNav">
      SignIn
      <ul>
        <li>
          <NavLink exact to="/signup">
            SignUp
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SignIn;
