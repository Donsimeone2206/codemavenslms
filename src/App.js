import "./styles/globals.css";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import Quizzes from "./pages/Quizzes";
import Projects from "./pages/Projects";
import Exams from "./pages/Exams";
import Profile from "./pages/Profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/student-events" element={<Events />} />
      <Route path="student-quizzes" element={<Quizzes />} />
      <Route path="/student-projects" element={<Projects />} />
      <Route path="/student-exams" element={<Exams />} />
      <Route path="/student-courses" element={<h1>COME BACK LATER</h1>} />
      <Route path="/student-feedback" element={<h1>COME BACK TOMORROW</h1>} />
      <Route path="/student-profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
