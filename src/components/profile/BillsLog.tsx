import React, { useState } from "react";
import dummyBills from "../documents/dummyBills";
import MypageNav from "./MypageNav";
import danggeun from "../image/danggeun.jpg";
import AddBills from "../Modal/AddBills";

function BillsLog() {
  const xbtnHandler = (e: any) => {
    const returnvalue = window.confirm("정말 인증기록을 지우시겠어요?");
    if (returnvalue === true) {
      alert("인증기록을 삭제하였습니다.");
    } else {
      alert("삭제과정을 취소하였습니다.");
    }
  };

  const [show, setShow] = useState(false);
  const handleModalClose = (e: any) => {
    const currentClass = e.target.className;
    if (
      currentClass === "ModalCloseBtn" ||
      currentClass === "modal-background"
    ) {
      setShow(false);
    }
    return;
  };
  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <div className="MyBillsGrid">
      <div>
        <MypageNav />
      </div>
      <div>
        <div className="BillsLogsTitle">나의 인증목록</div>
        <ul className="BillsLogsWhole">
          {dummyBills.map((dummyBill) => (
            <li className="BillsOne" key={dummyBill.id}>
              <div className="BillsBack">
                <div className="BillsXBtn" onClick={xbtnHandler}>
                  X
                </div>
                <img className="BillsImg" src={danggeun} alt="영수증"></img>
                {dummyBill.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div hidden={!show}>
        <div className="modal-background" onClick={handleModalClose}>
          <div className="modal-card">
            <AddBills handleModalClose={handleModalClose} />
          </div>
        </div>
      </div>
      {show ? (
        <></>
      ) : (
        <div className="BillsLogAddBtn" onClick={handleModalOpen}>
          +
        </div>
      )}
    </div>
  );
}

export default BillsLog;
