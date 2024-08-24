import "./App.css";
import Greeting from "./components/greeting.component";
import Counter from "./components/counter.component";
import RenderList from "./components/renderList.component";

function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <div className="App">
      <header className="App-header">
        <p>Check Technical Assessment</p>
        <p>Task 1 :</p>
        <Greeting name="Théo" />
        <p>Task 2 :</p>
        <Counter></Counter>
        <p>Task 3 :</p>
        <RenderList list={names}></RenderList>
      </header>
    </div>
  );
}

export default App;
