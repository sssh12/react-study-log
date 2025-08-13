// name, age, hobbies, isLoggedIn 등
const UserProfile = ({ name, age, isLoggedIn, hobbies }) => {
  return (
    <div>
      <h2>{name}님의 프로필</h2>
      <ul>
        <li>나이: {age}</li>
        {/* 배열은 join 메소드로 보기 좋게 출력 */}
        <li>취미: {hobbies.join(", ")}</li>
        {/* Boolean 값을 이용한 조건부 렌더링 (삼항 연산자) */}
        <li>로그인 상태: {isLoggedIn ? "로그인 됨 O" : "로그아웃 됨 X"}</li>
      </ul>
    </div>
  );
};

export default UserProfile;
