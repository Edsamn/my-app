import {useState} from "react";

type Customer = {
  id: number;
  name: string;
  phone: string;
};

function CustomerApi() {
  const [customer, setCustomers] = useState<Customer[]>([]);
  const [loading, setloading] = useState(true);
}

export default CustomerApi;
