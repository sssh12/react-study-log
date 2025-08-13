# 1. 하나의 부모 요소로 감싸야 함

컴포넌트가 반환하는 JSX는 반드시 하나의 태그로 감싸져 있어야 합니다.

❌ **잘못된 코드** (h1과 p 태그, 두 개의 형제 요소가 있음)

```jsx
return (
  <h1>안녕하세요</h1>
  <p>리액트입니다</p>
);
```

✅ **올바른 코드** (div로 감싸기)

```jsx
return (
  <div>
    <h1>안녕하세요</h1>
    <p>리액트입니다</p>
  </div>
);
```

✅ **더 좋은 코드** (Fragment 사용하기)  
불필요한 div를 만들지 않으려면 `<></>` (Fragment)로 감싸면 됩니다.

```jsx
return (
  <>
    <h1>안녕하세요</h1>
    <p>리액트입니다</p>
  </>
);
```

# 2. JSX 안에서 JavaScript 값을 사용하려면 `{}` 중괄호를 사용합니다.

```jsx
const name = "아이언맨";
return <h1>안녕, {name}!</h1>; // 화면에 "안녕, 아이언맨!" 출력
```

# 3. class 대신 className을 사용합니다.

HTML에서는 CSS 클래스를 지정할 때 `class` 속성을 쓰지만, JSX에서는 `class`가 JavaScript의 예약어이기 때문에 `className`을 사용해야 합니다.

```jsx
// <div class="container"> (X)
<div className="container"></div> // (O)
```

# 4. 태그는 반드시 닫아야 합니다.

`<img>`나 `<input>`처럼 닫는 태그가 없는 HTML 태그도 JSX에서는 반드시 `/`로 닫아줘야 합니다.

```jsx
// <br> (X)
<br /> // (O)
```
