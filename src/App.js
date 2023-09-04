import "./components/Sidebar";
import "./styles/globals.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="gibMargin">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
