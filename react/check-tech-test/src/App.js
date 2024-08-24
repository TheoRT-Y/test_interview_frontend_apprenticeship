import logo from "./logo.svg";
import "./App.css";

import Greeting from "./components/greeting.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Check Technical Assessment</p>
        <p>Task 1 :</p>
        <Greeting name="Théo" />
      </header>
    </div>
  );
}

export default App;
