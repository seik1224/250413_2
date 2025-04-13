import React from "react";

const Framer08 = () => {
  return (
    <>
      <section className="h-screen"></section>
      {/* 첫 번째 섹션 */}
      <section className="h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-blue-500 w-40 h-40 rounded-lg">섹션 1</div>
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
