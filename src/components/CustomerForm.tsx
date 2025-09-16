import {useState} from "react";

type Customer = {
  id: number;
  name: string;
  phone: string;
};

function CustomerForm() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
    };

    setCustomers([...customers, newCustomer]);
    setName("");
    setPhone("");
  }

  return (
    <div>
      <h2>Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Clientes Cadastrados:</h3>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.phone}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum cliente cadastrado ainda.</p>
      )}
    </div>
  );
}

export default CustomerForm;
