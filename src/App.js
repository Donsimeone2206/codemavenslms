import "./styles/globals.css";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Events from "./pages/Events";
import Quizzes from "./pages/Quizzes";
import Projects from "./pages/Projects";
import Exams from "./pages/Exams";
import Profile from "./pages/Profile";
function App() {
  const [navOn, setNavOn] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard navOn={navOn} setNavOn={setNavOn} />}
      />
      <Route
        path="/student-events"
        element={<Events navOn={navOn} setNavOn={setNavOn} />}
      />
      <Route
        path="student-quizzes"
        element={<Quizzes navOn={navOn} setNavOn={setNavOn} />}
      />
      <Route
        path="/student-projects"
        element={<Projects navOn={navOn} setNavOn={setNavOn} />}
      />
      <Route
        path="/student-exams"
        element={<Exams navOn={navOn} setNavOn={setNavOn} />}
      />
      <Route path="/student-courses" element={<h1>COME BACK LATER</h1>} />
      <Route path="/student-feedback" element={<h1>COME BACK TOMORROW</h1>} />
      <Route path="/student-profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
