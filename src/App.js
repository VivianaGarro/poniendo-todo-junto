import PersonCard from "./componentes/PersonCard";

const App= () => {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
    </div>
  );
}

export default App;