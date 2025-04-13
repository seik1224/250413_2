"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    /*
      [ AnimatePresence ]
      key가 변경되면 AnimatePresence는 이를 새로운 컴포넌트로 인식하고 애니메이션을 트리거

      mode="sync" : 모든 자식 요소의 애니메이션이 동시에 시작
      mode="wait" : 이전 자식 요소의 exit 애니메이션이 완료될 때까지 새로운 자식 요소의 애니메이션을 기다림
      mode="popLayout": 새로운 요소가 즉시 레이아웃에 추가되고, 이전 요소는 그 위에서 퇴장 애니메이션을 수행
    */
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 100 }} // 페이지가 들어올 때 효과
        animate={{ opacity: 1, y: 0 }} // 페이지가 나타날 때 효과
        exit={{ opacity: 0, y: -100 }} // 페이지가 나갈 때 효과
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
