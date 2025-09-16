import Greeting from "./components/Greeting.tsx";
import Counter from "./components/Counter.tsx";
import CustomerList from "./components/CustomerList.tsx";

function AppTSX() {
  return (
    <div>
      <h2>Primeiro Exercício</h2>
      <Greeting name="Eduardo" age={33}></Greeting>
      <Greeting name="Ana" age={25}></Greeting>
      <h2>Clientes</h2>
      <CustomerList />
      <Counter />
    </div>
  );
}

export default AppTSX;
