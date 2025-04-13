import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';

const Framer12 = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll();

  const animationPath = useTransform(scrollYProgress, [0,1], [0,1]);

  return (
    <div ref={ref} className="h-[200vh]">
      {/* 스크롤 시 변하는 SVG */}
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <svg
          viewBox="0 0 200 200"
          className="size-96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 10 80 Q 50 10 90 80 T 180 80"
            fill="transparent"
            stroke="blue"
            strokeWidth="2"
            className=""
            style={{
              strokeLinecap: "round",
              strokeLinejoin: "round",
              pathLength : animationPath
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Framer12;
