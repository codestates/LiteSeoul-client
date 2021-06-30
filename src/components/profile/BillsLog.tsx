import React from "react";
import dummyBills from "../documents/dummyBills";
import MypageNav from "./MypageNav";

function BillsLog() {
  return (
    <div className="MypageFlex">
      <div>
        <MypageNav />
      </div>
      <div>
        <div className="BillsLogsTitle">나의 인증목록</div>
        <ul className="BillsLogsWhole">
          {dummyBills.map((dummyBill) => (
            <li className="BillsOne" key={dummyBill.id}>
              <div className="BillsBack">
                <div className="BillsXBtn">X</div>
                {dummyBill.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BillsLog;
