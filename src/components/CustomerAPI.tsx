import {useEffect, useState} from "react";

type Customer = {
  id: number;
  name: string;
  phone: string;
};

function CustomerApi() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fakeData: Customer[] = [
        {id: 1, name: "Eduardo", phone: "99999999"},
        {id: 2, name: "Ana", phone: "8888888888"},
      ];

      setCustomers(fakeData);
      setloading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <p>Carregando lista de clientes...</p>;
  }

  return (
    <div>
      <p>Clientes carregados da API.</p>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerApi;
