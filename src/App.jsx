import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      {/* showTimer가 true일 때만 Timer 컴포넌트를 보여줌 */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        타이머 보이기/숨기기
      </button>
    </div>
  );
}

export default App;
