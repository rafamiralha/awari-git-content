
import "./App.css";
import ListUser from "./components/ListUsers";

function App() {
  const users = [
    { id: 1, name: "Joao" },
    { id: 2, name: "Pedro" },
  ];
  return (
    <div className="App">
      <ListUser users={users}></ListUser>
    </div>
  );
}

export default App;
