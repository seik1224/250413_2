import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const Framer11 = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target : ref,
    offset : ['center end', 'end center']
  })

  const opacity1 = useTransform(scrollYProgress,[0,0.3],[0,1]);
  const opacity2 = useTransform(scrollYProgress,[0.3,0.6],[0,1]);
  const opacity3 = useTransform(scrollYProgress,[0.6,0.9],[0,1]);

  /*
    [ useMotionValue ]
    useMotionValue(MotionValue, event, callback)
    모션 값의 변화를 감지하고 이에 반응할 수 있게 해주는 도구

    - motionValue : 감시할 모션 값
    - eventName : 감지할 이벤트 유형
    - callback : 값이 변할 때 실행될 함수
  */
  useMotionValueEvent(scrollYProgress, 'change', (latest)=>{
    console.log('scroll progress : ' ,latest);
    if(latest > 0.48 && latest < 0.52) console.log('MIDDLE');
    if(latest === 1) console.log('END!');
  })


  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">상단 섹션</h1>
      </section>
      <section className="h-[100vh] flex items-center justify-center">
        <div className="flex space-x-4">
          <div style={{opacity:opacity1}} className="bg-blue-500 w-20 h-20" />
          <div style={{opacity:opacity2}} className="bg-blue-500 w-20 h-20" />
          <div style={{opacity:opacity3}} className="bg-blue-500 w-20 h-20" />
        </div>
      </section>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">하단 섹션</h1>
      </section>
    </>
  );
};

export default Framer11;
