import React, { useRef } from "react";

const Gsap02 = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <section className="h-[200vh] flex justify-center items-center">
      <div ref={boxRef} className="size-20 bg-red-600">BOX</div>
    </section>
  );
};

export default Gsap02;
