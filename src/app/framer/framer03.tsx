import React from "react";
const Framer03 = () => {
  return (
    <>
      <ul>
        {[1, 2, 3].map((item, index) => (
          <li key={item}>리스트 항목 {item}</li>
        ))}
      </ul>
      <ul>
        {[1, 2, 3].map((item) => (
          <li key={item}>리스트 항목 {item}</li>
        ))}
      </ul>
    </>
  );
};

export default Framer03;
