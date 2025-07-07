import { Routes, Route, Router } from "react-router";
import HomePage from "./HomePage";
import { useState } from "react";
import "./index.css";
import QuizTitles from "./QuizTitles";
import StartQuiz from "./StartQuiz";
import AllQuiz from "./assets/AllQuiz";

function App() {
  const [quesAns, setQuesAns] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerHover, setAnswerHover] = useState(true);
  const [selectAnswer, setSelectAnswer] = useState({
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
  });
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  });

  const [clickOption, setClickOption] = useState("click start to prove");
  const [isStart, setIsStart] = useState(true);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allQuiz" element={<AllQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
