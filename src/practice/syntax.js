/*
 * 변수 선언 방식 -
 * let, const
 * React는 데이터 불변성(immutability)을 지키는 것이 매우 중요함.
 * 따라서, 실수로 값이 변경되는 것을 방지하기 위해
 * 기본적으로 모든 변수를 const로 선언하는 습관을 들이는 것이 좋음.
 */

// 1. let: 값 변경 가능
let name = "토르";
console.log(name); // "토르" 출력
name = "로키";
console.log(name); // "로키" 출력

// 2. const: 값 변경 불가능 (constant)
const birthYear = 2000;
console.log(birthYear);
// birthYear = 2002; // TypeError: Assignment to constant variable.

/*
 * 함수
 * React 컴포넌트를 만들거나, 이벤트 핸들러 함수를 전달할 때 등
 * 거의 모든 함수를 화살표 함수로 작성하게 됨
 */

// 일반 함수
function sayHello(name) {
  return "안녕하세요, " + name + "님!";
}

// 화살표 함수
const sayHelloArrow = (name) => {
  return `안녕하세요, ${name}님!`;
};

// 코드가 한 줄이면 중괄호{}와 return 생략 가능
const add = (a, b) => a + b;

console.log(sayHello("캡틴 아메리카"));
console.log(sayHelloArrow("아이언맨"));
console.log(add(5, 10)); // 15

/**
 * 구조 분해 할당
 * 객체나 배열 속성을 쉽게 꺼내 변수에 할당할 수 있게 해주는 문법
 * 부모 컴포넌트로부터 props (데이터)를 받을 때 객체 구조 분해 할당을 사용
 * 또한, React의 핵심 기능인 useState Hook은 배열 구조 분해 할당을 사용
 */

// 1. 객체 구조 분해
const user = {
  email: "stark@avengers.com",
  nickname: "Iron man",
  age: 40,
};
// user.email, user.nickname 대신 아래처럼 바로 변수로 꺼내 쓸 수 있음
const { email, nickname, age } = user;
console.log(email, nickname, age);

// 2. 배열 구조 분해
const avengers = ["캡틴", "아이언맨", "토르"];
const [captain, ironman, thor] = avengers;
console.log(captain, ironman, thor);

/**
 * 전개 구문
 * ... 을 사용하여 배열이나 객체를 '펼쳐서' 그 안의 요소들을 꺼냄
 * 주로 객체나 배열의 복사, 병합, 수정 시에 사용
 * '불변성'을 지키기 위한 핵심 문법. React에서 state(상태)를 업데이트할 때,
 * 기존 state 객체나 배열을 직접 수정하는 대신,
 * 전개 구문을 사용해 복사본을 만들고 거기에 변화를 주는 방식으로 사용
 */

// 1. 배열 전개
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log(combinedArr);

// 객체 전개
const person = { name: "Peter Parker" };
const detail = { age: 20, alias: "Spider-Man" };
const character = { ...person, ...detail };
// { name: "Peter Parker", age: 20, alias: "Spider-Man" }
console.log(character);

/**
 * 템플릿 리터럴
 * 백틱(`)을 사용하여 문자열 생성
 * 문자열 안에 ${변수} 형태로 변수나 표현식을 쉽게 삽입
 * 줄바꿈도 자유롭게 가능
 * JSX 내부에서 동적인 텍스트나
 * className 등을 조합할 때 매우 유용하게 사용
 */

const heroName = "블랙 위도우";
const realName = "나타샤 로마노프";

// 기존 방식
const message1 = heroName + "의 진짜 이름은 " + realName + "입니다.";

// 템플릿 리터럴 방식
const message2 = `${heroName}의 진짜 이름은 ${realName}입니다.
줄바꿈도 자유롭습니다.`;

console.log(message1);
console.log(message2);

/**
 * 모듈 시스템 (import / export)
 * JavaScript 파일을 여러 개로 분리하여 코드를 관리할 수 있게 해주는 기능
 * export: 파일에서 변수, 함수, 클래스 등을 내보냅니다.
 * import: 다른 파일에서 내보낸 것을 가져옵니다.
 * export default: 파일에서 단 하나의 '기본' 값을 내보냅니다.
 * React는 컴포넌트 기반 아키텍처.
 * 즉, 기능별로 코드를 여러 파일(컴포넌트)로 분리해서 작성.
 * export로 컴포넌트를 내보내고, import로 다른 곳에서 가져와 조립하는 방식으로
 * 애플리케이션을 만듬. React 프로젝트의 모든 파일이 이 모듈 시스템을 기반으로 동작
 */
