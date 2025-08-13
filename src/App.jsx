// 1. 방금 만든 Greeting 컴포넌트를 import로 가져옴
// import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

function App() {
  const user1 = {
    name: "토르",
    age: 1500,
    isLoggedIn: true,
    hobbies: ["망치 돌리기", "스톰브레이커 휘두르기"],
  };

  const user2 = {
    name: "스파이더맨",
    age: 20,
    isLoggedIn: false,
    hobbies: ["거미줄 타기", "사진 찍기", "숙제하기"],
  };

  return (
    <>
      {/* user1 객체의 데이터를 props로 전달 */}
      <UserProfile
        name={user1.name}
        age={user1.age}
        isLoggedIn={user1.isLoggedIn}
        hobbies={user1.hobbies}
      />
      <hr />
      {/* user2 객체의 데이터를 props로 전달 */}
      <UserProfile
        name={user2.name}
        age={user2.age}
        isLoggedIn={user2.isLoggedIn}
        hobbies={user2.hobbies}
      />
    </>
  );
}

export default App;
