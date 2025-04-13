import React from "react";

const Observer01 = () => {
  return (
    <>
      <div className="h-[300vh] ">
        <div className="w-full h-screen bg-yellow-500 flex justify-center items-center">
          부드러운 스크롤 제공하는 라이브러리
        </div>
        <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
          <div
            className="target-element bg-red-500 size-28"
            style={{ transition: "opacity 1s ease-in-out" }}
          ></div>
        </div>
        <div className="w-full h-screen bg-green-500 flex justify-center items-center">
          부드러운 스크롤 제공하는 라이브러리
        </div>
      </div>
    </>
  );
};

export default Observer01;
