import "./App.css";
import Greeting from "./components/greeting.component";
import Counter from "./components/counter.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Check Technical Assessment</p>
        <p>Task 1 :</p>
        <Greeting name="Théo" />
        <p>Task 2 :</p>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
