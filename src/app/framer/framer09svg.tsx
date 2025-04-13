import React from "react";

const Framer09svg = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">상단 섹션</h1>
      </section>

      <div className="h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full items-center">
            <div className="h-[100vh] w-[400vw] flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-start px-20 relative">
                <h2 className="pl-[100vw] text-white text-2xl md:text-6xl font-bold relative z-10">
                  긴 섹션 내용이 여기에 들어갑니다. 스크롤하여 더 많은 내용을
                  확인하세요.
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none z-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="circleMask">
                  <rect width="100%" height="100%" fill="white" />
                  <circle cx="50%" cy="50%" fill="black" />
                </mask>
              </defs>
              <rect
                width="100%"
                height="100%"
                className="fill-green-900"
                mask="url(#circleMask)"
              />
            </svg>
          </div>
        </div>
      </div>

      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">하단 섹션</h1>
      </section>
    </>
  );
};

export default Framer09svg;
