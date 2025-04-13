import React, { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';


const Framer08 = () => {
  // 첫번째 섹션
  const ref1 = useRef(null);

  const { scrollYProgress : scrollYProgress1 } = useScroll({
    target : ref1,
    offset : ['start end', 'end start'],
    // "start end" : 타겟요소의 시작점이 뷰포트의 끝에 도달했을때 시작
    // 'end start' : 타겟요소의 끝점이 뷰포트의 시작점에 도달했을때 끝
  });

  const scale = useTransform(scrollYProgress1, [0.4,0.6], [0.5,1])
  const rotate = useTransform(scrollYProgress1, [0.4,0.6], [0,360])

  return (
    <>
      <section className="h-screen"></section>
      {/* 첫 번째 섹션 */}
      <section ref={ref1} className="h-screen bg-gray-100 flex justify-center items-center">
        <motion.div
        style={{scale,rotate}}
        className="bg-blue-500 w-40 h-40 rounded-lg"
        >섹션 1</motion.div>
      </section>

      {/* 두 번째 섹션 */}
      <section className="h-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-green-500 w-40 h-40 rounded-lg">섹션 2</div>
      </section>
      <section className="h-screen"></section>
    </>
  );
};

export default Framer08;
