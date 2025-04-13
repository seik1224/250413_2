"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis01 from "./lenis/lenis";
import Observer01 from "./lenis/observer01";
import Horizontal from "./lenis/horizontal";
import Gsap01 from "./gsap/gsap01";
import Gsap02 from "./gsap/gsap02";
import Gsap03 from "./gsap/gsap03";
import Framer01 from "./framer/framer01";
import Framer02 from "./framer/framer02";

/*
  [ 스크롤트리거 플러그인 등록 ]
  플러그인 등록은 한 번만 수행하면 되기 때문에
  컴포넌트가 렌더링될 때마다 반복할 필요가 없어서 컴포넌트 밖에서 실행

  일반적으로 최상위 컴포넌트나 앱의 진입점에서 한 번만 실행
*/
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return <>
    {/* <Lenis01 /> */}
    {/* <Observer01 /> */}
    {/* <Horizontal /> */}
    {/* <Gsap01 /> */}
    {/* <Gsap02 /> */}
    {/* <Gsap03 /> */}
    {/* <Framer01 /> */}
    <Framer02 />
  </>;
}
