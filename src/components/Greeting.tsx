type GreetingProps = {
  name: string;
  age: number;
};

function Greeting({name, age}: GreetingProps) {
  return (
    <div>
      <h2>Olá, {name}!</h2>
      <p>Você tem {age} anos.</p>
    </div>
  );
}

export default Greeting;
