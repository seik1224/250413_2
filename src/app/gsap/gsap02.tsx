import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Gsap02 = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const element = boxRef.current;
    if(!element) return;

    const animation = gsap.to(element, {
      scrollTrigger : {
        trigger : element, // 스크롤 트리거 대상 : 어떤 요소를 만났을때 애니메이션 시작인지
        start: "top 50%", // 요소의 top부분이 뷰포트 80% 지점에 도달할때 애니메이션 시작
        end : "top 30%", // 요소의 top부분이 뷰포트 30% 지점에 도달할때 애니메이션 종료
        scrub:true, // 스크롤에 따라 애니메이션 진행
        markers:true,
      },
      x:100,
      opacity :0,
      duration:1
    });

    return () => {
      animation.kill(); // 애니메이션 정리
      gsap.killTweensOf(element); // 요소 변수 정리
      ScrollTrigger.getAll().forEach((trigger)=>trigger.kill()); // 스크롤 트리거 정리
    }

  }, [])

  return (
    <section className="h-[200vh] flex justify-center items-center">
      <div ref={boxRef} className="size-20 bg-red-600">BOX</div>
    </section>
  );
};

export default Gsap02;
