import React, { useEffect, useRef } from "react";

const Observer01 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  /*
    [IntersectionObserver]
    브라우저에서 요소가 뷰포트 안에 들어왔는지 또는 나갔는지를
    비동기적으로 감지할 수 있는 API
  */
  useEffect(()=>{
    const observer = new IntersectionObserver(
      // 교차 상태가 변경될때 실행되는 함수
      (entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
          } else {
            (entry.target as HTMLElement).style.opacity = '0';
          }
        })
      },
      // 옵저버의 동작을 세부적으로 조정할 수 있는 옵션 객체
      {
        threshold:0.5
      }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget); // 요소 감시 시작
    }

    return ()=>{
      if(currentTarget){
        observer.unobserve(currentTarget);
      }
    }

  }, [])

  return (
    <>
      <div className="h-[300vh] ">
        <div className="w-full h-screen bg-yellow-500 flex justify-center items-center">
          부드러운 스크롤 제공하는 라이브러리
        </div>
        <div className="w-full h-screen bg-blue-500 flex justify-center items-center">
          <div
            ref={targetRef}
            className="target-element bg-red-500 size-28"
            style={{ transition: "opacity 1s ease-in-out" }}
          ></div>
        </div>
        <div className="w-full h-screen bg-green-500 flex justify-center items-center">
          부드러운 스크롤 제공하는 라이브러리
        </div>
      </div>
    </>
  );
};

export default Observer01;
