import React from "react";
import { motion } from 'framer-motion';

const itemVariants = {
  hidden : {opacity : 0, y:20},
  visible : {opacity :1, y:0},
}

const Framer03 = () => {
  return (
    <>
      <ul>
        {[1, 2, 3].map((item, index) => (
          <li key={item}>리스트 항목 {item}</li>
        ))}
      </ul>
      <motion.ul
        initial = 'hidden'
        animate = 'visible'
        transition={{
          delayChildren : 1.5, // 애니메이션 시작 시간 지연
          staggerChildren : 0.4, // 0.4초 지연을 주고 자식 애니메이션 시작
        }}
      >
        {[1, 2, 3].map((item) => (
          <motion.li key={item} variants={itemVariants}>리스트 항목 {item}</motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Framer03;
