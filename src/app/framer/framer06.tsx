import React from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const Framer06 = () => {
  /*
    [ useScroll ]
    스크롤 진행도 0에서 1 사이의 값으로 나타내는 MotionValue 객체
  */
  const {scrollYProgress} = useScroll();
  /*
    [ useTransform ]
    MotionValue (number)를 가져와 입력값의 범위만큼 출력값의 범위로 변화
  */
  const backgroundColor = useTransform(
    scrollYProgress, // 변환의 입력값
    [0.5,1], // 입력값의 범위
    ['#f00', '#00f'] // 출력값의 범위
  )


  window.addEventListener('scroll', ()=>{
    // console.log(scrollYProgress.current);
    console.log(scrollYProgress.get());
  })
  return (
    <>
      <motion.div
        style={{ backgroundColor: backgroundColor }}
        className="h-[200vh] flex justify-center items-center"
      >
        <h1 className="text-white text-4xl">스크롤에 따라 색상이 변합니다</h1>
      </motion.div>
    </>
  );
};

export default Framer06;
