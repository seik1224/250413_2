import gsap from "gsap";
import React, { useRef } from "react";

const Gsap01 = () => {
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);

  // to 애니메이션
  const handleClickBox1 = () => {
    gsap.to(boxRef1.current, {
      x:100, // 종료 위치
      opacity:0.5, // 종료 투명도
      duration:1, // 애니메이션 지속시간
      ease:'bounce.out', // 가속도
      repeat:5,
    })
  }

  // from 애니메이션
  const handleClickBox2 = () => {

  }

  // fromTo 애니메이션
  const handleClickBox3 = () => {

  }

  // set
  const handleClickBox4 = () => {

  }
  return (
    <>
      <div ref={boxRef1} onClick={handleClickBox1} className="w-40 h-40 bg-blue-500 cursor-pointer mb-4">to</div>
      <div ref={boxRef2} onClick={handleClickBox2} className="w-40 h-40 bg-red-500 cursor-pointer mb-4">from</div>
      <div ref={boxRef3} onClick={handleClickBox3} className="w-40 h-40 bg-green-500 cursor-pointer mb-4">fromTo</div>
      <div ref={boxRef4} onClick={handleClickBox4} className="w-40 h-40 bg-yellow-500 cursor-pointer">set</div>
    </>
  );
};

export default Gsap01;
