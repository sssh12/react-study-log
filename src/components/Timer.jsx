import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    // -- 사이드 이펙트 코드 --
    // 1초마다 콘솔에 메시지 출력하는 타이머 설정
    const timerId = setInterval(() => {
      console.log("타이머 실행 중 ...");
    }, 1000);
    // -- 사이드 이펙트 코드 끝 --

    // -- 클린업(Cleanup) 함수
    // useEffect의 return 문에서 함수를 반환하면,
    // 이 함수는 컴포넌트가 화면에서 사라질 때(unmount) 실행됩니다.
    return () => {
      clearInterval(timerId); // 설정했던 타이머를 정리(제거)
      console.log("타이머가 정리(cleanup) 되었습니다.");
    };
  }, []); // 의존성 배열이 비어있으므로,
  // 이 effect는 최초 렌더링 시 한 번만 실행

  return <div>타이머가 실행 중입니다. (콘솔을 확인하세요)</div>;
};

export default Timer;
