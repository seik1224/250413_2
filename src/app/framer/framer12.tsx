import React from "react";

const Framer12 = () => {
  return (
    <div className="h-[200vh]">
      {/* 스크롤 시 변하는 SVG */}
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <svg
          viewBox="0 0 200 200"
          className="size-96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 80 Q 50 10 90 80 T 180 80"
            fill="transparent"
            stroke="blue"
            strokeWidth="2"
            className=""
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Framer12;
