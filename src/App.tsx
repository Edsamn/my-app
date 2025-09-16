import Greeting from "./components/Greeting.tsx";
import Counter from "./components/Counter.tsx";

function AppTSX() {
  return (
    <div>
      <h1>Primeiro Exercício</h1>
      <Greeting name="Eduardo" age={33}></Greeting>
      <Greeting name="Ana" age={25}></Greeting>
      <Counter />
    </div>
  );
}

export default AppTSX;
