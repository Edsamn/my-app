// import Greeting from "./components/Greeting.tsx";
// import Counter from "./components/Counter.tsx";
// import CustomerList from "./components/CustomerList.tsx";
import CustomerForm from "./components/CustomerForm.tsx";
import CustomerApi from "./components/CustomerAPI.tsx";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";

function AppTSX() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | {""}
        <Link to="/form">Cadastrar clientes</Link> | {""}
        <Link to="/list">Lista de clientes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Bem-vindo ao CRM Petshop 🐾</h1>} />
        <Route path="/form" element={<CustomerForm />} />
        <Route path="/list" element={<CustomerApi />} />
      </Routes>
    </Router>
    // <div>
    //   <h2>Primeiro Exercício</h2>
    //   <Greeting name="Eduardo" age={33}></Greeting>
    //   <Greeting name="Ana" age={25}></Greeting>
    //   <Counter />
    //   <h2>Clientes</h2>
    //   <CustomerList />
    //   <h2>Cadastro de Clientes</h2>
    //   <CustomerForm />
    //   <h2>UseEffect em ação</h2>
    //   <CustomerApi />
    // </div>
  );
}

export default AppTSX;
