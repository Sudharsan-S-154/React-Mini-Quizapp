import { Routes, Route, Router } from "react-router";
import HomePage from "./HomePage";
import "./index.css";
import AllQuiz from "./AllQuiz";
import Answer from "./Answer";
import AllAnswer from "./AllAnswer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allQuiz" element={<AllQuiz />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/allAnswer" element={<AllAnswer />} />
      </Routes>
    </div>
  );
}

export default App;
