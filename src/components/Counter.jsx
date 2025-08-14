// 1. react 라이브러리에서 useState import
import { useState } from "react";

const Counter = () => {
  // 2. useState를 호출하여 count라는 이름의 state 생성
  // 초기값 0
  // count: 현재 카운트 값 (읽기 전용)
  // setCount: count 값을 변경하는 함수
  const [count, setCount] = useState(0);

  // 3. 버튼 클릭 시 실행될 함수 정의
  const handleIncrease = () => {
    // state를 변경할 때는 반드시 세터(setter) 함수(setCount)를 사용해야 함.
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  // 4. JSX에서 state 값(count)을 보여주고,
  //    버튼의 onClick 이벤트에 핸들러 함수를 연결
  return (
    <div>
      <h2>카운터: {count}</h2>
      <button onClick={handleIncrease}>+1 증가</button>
      <button onClick={handleDecrease}>-1 감소</button>
    </div>
  );
};

export default Counter;
