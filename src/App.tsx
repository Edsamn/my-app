import Greeting from "./components/Greeting.tsx";
import Counter from "./components/Counter.tsx";
import CustomerList from "./components/CustomerList.tsx";
import CustomerForm from "./components/CustomerForm.tsx";
import CustomerApi from "./components/CustomerAPI.tsx";

function AppTSX() {
  return (
    <div>
      <h2>Primeiro Exercício</h2>
      <Greeting name="Eduardo" age={33}></Greeting>
      <Greeting name="Ana" age={25}></Greeting>
      <Counter />
      <h2>Clientes</h2>
      <CustomerList />
      <h2>Cadastro de Clientes</h2>
      <CustomerForm />
      <h2>UseEffect em ação</h2>
      <CustomerApi />
    </div>
  );
}

export default AppTSX;
