import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>State와 useState</h1>
      <Counter />
      <hr />
      {/* 컴포넌트마다 각자 독립적인 state를 가짐 */}
      <Counter />
    </div>
  );
}

export default App;
