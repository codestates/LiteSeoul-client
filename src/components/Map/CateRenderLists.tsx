import React from "react";

function CateRenderLists({ listDatas, handleModalData }: any) {
  // console.log(props)

  // listDatas.map((listData: any) => (
  //   handleModalData(listData)
  // ))

  return (
    // 더미데이터
    <>
    <div>
      <div>The Peaker</div>
      <div>
        <img src="icon/location_main.svg" alt="maker"></img>
        <span>성동구 왕십리로 115 헤어그라운드</span>
      </div>
      <div>
        <img src="icon/arrow_left_color.svg" alt="maker"></img>
      </div>
    </div>
    
    {/* 실제 서버 렌더링 데이터 */}
    <>
      {listDatas.map((listData: any) => (
        <div onClick={(listData) => handleModalData(listData)}>
          <div>{listData.name}</div>
          <div>
            <img src="icon/location_main.svg" alt="maker"></img>
            <span>{listData.ground}</span>
          </div>
          <div>
            <img src="icon/arrow_left_color.svg" alt="maker"></img>
          </div>
        </div>
      ))}
    </>
    </>
  );
}

export default CateRenderLists;
