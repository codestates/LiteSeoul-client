import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";

function SignIn() {
  const [show, setShow] = useState(false);

  const handleModalClose = (e: any) => {
    const currentClass = e.target.className;
    if (currentClass === "ModalCloseBtn" || currentClass === "modal-background") {
      setShow(false);
    }
    return;
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <div className="SignInNav">
      <div hidden={!show}>
        <div className="modal-background" onClick={handleModalClose}>
          <div className="modal-card">
            <SignUp handleModalClose={handleModalClose} />
          </div>
        </div>
      </div>
      <div className="SignUpOpenBtn" onClick={handleModalOpen}>
        회원가입
      </div>
    </div>
  );
}

export default SignIn;
