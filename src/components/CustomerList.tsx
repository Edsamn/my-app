type Customer = {
  id: number;
  name: string;
  phone: string;
};

// const customers: Customer[] = [
//   {id: 1, name: "Ana", phone: "9999-1111"},
//   {id: 2, name: "Carlos", phone: "9888-2222"},
//   {id: 3, name: "Eduardo", phone: "9777-3333"},
// ];

const customers: Customer[] = [];

function CustomerList() {
  return (
    <div>
      <h2>Lista de Clientes</h2>
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

export default CustomerList;
