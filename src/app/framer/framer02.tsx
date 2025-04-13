import React from "react";
import { motion } from 'framer-motion';

const Framer02 = () => {
  return (
    <>
      <motion.div
      initial = {{opacity:0, y:100}} // 요소의 초기상태
      animate = {{opacity:1, y:0}} // 요소의 최종상태
      transition={{
        duration: 1.5,
        delay:0.5,
        ease:'easeInOut',
        type:'spring',
        bounce:0.25,
        repeat:Infinity,
        repeatType :'reverse',
        repeatDelay : 1,
      }}
      className="bg-green-500 h-32 w-32 m-4"></motion.div>
    </>
  );
};

export default Framer02;
