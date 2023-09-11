import "./components/Sidebar";
import "./styles/globals.css";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Quizzes from "./pages/Quizzes";

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      {/* <Events /> */}
      <Quizzes />
    </div>
  );
}

export default App;
