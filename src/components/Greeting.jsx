// 1. 컴포넌트 정의 (화살표 함수 사용)
// 함수의 파라미터로 props 객체를 받을 수 있음
// 이 props 객체 안에는 부모가 전달한 모든 데이터가 들어있음
// const Greeting = (props) => {
//   // 2. 컴포넌트가 화면에 보여줄 내용을 return 문 안에 JSX로 작성
//   // props 객체에서 name 값을 꺼내서 사용
//   return <h1>안녕하세요, {props.name}!</h1>;
// };

// // 3. 다른 파일에서 이 컴포넌트를 사용할 수 있도록 export
// export default Greeting;

// 파라미터 자리에 바로 props 객체를 구조 분해해 name 변수 추출
const Greeting = ({ name }) => {
  // props. 없이 바로 name 변수 사용 가능
  return <h1>안녕하세요, {name}님!</h1>;
};

export default Greeting;
