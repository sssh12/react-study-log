# State와 useState

State는 컴포넌트가 자체적으로 가지는 '상태' 값입니다.  
Props가 부모로부터 물려받은 '변경할 수 없는 유전자'라면, State는 컴포넌트의 '계속 변하는 기분이나 상황'과 같습니다.

가장 중요한 점은, React는 State가 변경될 때마다 화면을 자동으로 다시 그려준다는(리렌더링, re-rendering) 것입니다.  
이를 통해 우리는 동적인 UI를 매우 쉽게 만들 수 있습니다.

---

## 1. State, 왜 필요할까요?

"그냥 일반 변수(let)를 쓰면 안 되나요?" 라는 의문이 들 수 있습니다. 아주 좋은 질문입니다! 다음 예시를 통해 왜 State가 필요한지 알아보겠습니다.

❌ **일반 변수를 사용한 잘못된 카운터 예시**

```jsx
function WrongCounter() {
  let count = 0; // 일반 변수

  const handleClick = () => {
    count = count + 1;
    console.log(count); // 콘솔에는 1, 2, 3... 잘 찍힙니다.
  };

  // 하지만 버튼을 아무리 눌러도 화면의 0은 변하지 않습니다.
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

위 코드에서 버튼을 누르면 count 변수의 값은 분명히 증가하지만, 화면은 전혀 바뀌지 않습니다.  
React는 일반 JavaScript 변수의 변화를 감지하여 화면을 다시 그리지 않기 때문입니다.  
React에게 "이 값이 바뀌면 화면을 다시 그려줘!"라고 알려줄 특별한 방법이 필요한데, 그것이 바로 **State**입니다.

---

## 2. useState Hook: State를 사용하는 방법

**useState**는 React에서 제공하는 특별한 함수, 즉 Hook 중 하나입니다.  
함수형 컴포넌트 안에서 State를 사용하고 관리할 수 있게 해줍니다.

useState를 사용하는 방법은 공식과도 같습니다.

```jsx
import { useState } from "react";

const [state, setState] = useState(초기값);
```

- `import { useState } from 'react';`: React에서 useState Hook을 가져옵니다.
- `useState(초기값)`: useState를 호출할 때 괄호 안에 State의 초기값을 넣어줍니다.
- `[state, setState]`: useState는 항상 2개의 요소가 담긴 배열을 반환합니다.
  - `state`: 현재 상태 값 (읽기 전용)
  - `setState`: 이 상태 값을 변경(업데이트)할 수 있는 유일한 함수

우리는 이 배열을 배열 구조 분해 할당을 통해 `state`와 `setState`라는 변수에 할당하여 사용합니다.

## 3. State 업데이트 시 주의사항: 불변성(Immutability)

State가 객체나 배열일 경우, 업데이트할 때 특히 주의해야 합니다.  
State는 **불변(immutable)**하게 관리해야 합니다.  
즉, 원본 객체나 배열을 직접 수정해서는 안 되며, 항상 새로운 객체나 배열을 만들어 교체해 주어야 합니다.  
이때 사전 학습에서 배운 **전개 구문(...)**이 매우 유용하게 사용됩니다.

❌ **나쁜 예시: 객체를 직접 수정**

```jsx
const [user, setUser] = useState({ name: "피터 파커", age: 20 });

// user.age = 21;
// setUser(user); // React는 변화를 감지하지 못할 수 있음
```

✅ **좋은 예시: 전개 구문으로 새로운 객체를 생성**

```jsx
const handleAgeUp = () => {
  setUser({
    ...user, // 기존 user 객체의 모든 속성을 복사하고
    age: user.age + 1, // age 속성만 새로운 값으로 덮어쓴다
```
