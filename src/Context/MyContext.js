import React, { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import he from "he";
export const GlobalContext = createContext();

export const MyContext = ({ children }) => {
  const navigate = useNavigate();
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
  const [allAnswers, setAllAnswers] = useState([]);
  const [shuffeledAnswer, setShuffeledAnswer] = useState([]);
  const [playAgain, setPlayAgain] = useState(true);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        // await new Promise((res) => setTimeout(res, 2000)); // 500ms delay
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
        );
        const allQuestionAnswer = response.data.results.map((item) => {
          return {
            ...item,
            question: he.decode(item.question),
            correct_answer: he.decode(item.correct_answer),
            incorrect_answers: item.incorrect_answers.map((ans) =>
              he.decode(ans)
            ),
          };
        });
        setQuesAns(allQuestionAnswer);
        console.log("yayayayayy working....");
      } catch (e) {
        console.log(e);
      }
    };
    getQuestions();
  }, [playAgain]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  useEffect(() => {
    if (quesAns.length > 0) {
      setQuestion(quesAns[currentQuestion].question);
      const allAnswers = [
        quesAns[currentQuestion].correct_answer,
        quesAns[currentQuestion].incorrect_answers[0],
        quesAns[currentQuestion].incorrect_answers[1],
        quesAns[currentQuestion].incorrect_answers[2],
      ];
      let shuffledAnswer = shuffleArray([...allAnswers]);
      setShuffeledAnswer(shuffledAnswer);
      const newAnswer = {
        answer1: shuffledAnswer[0],
        answer2: shuffledAnswer[1],
        answer3: shuffledAnswer[2],
        answer4: shuffledAnswer[3],
      };
      setAnswer(newAnswer);
    }
  }, [quesAns, currentQuestion, setPlayAgain]);

  const handleQuestionChange = () => {
    // debugger;
    if (
      selectAnswer.answer1 ||
      selectAnswer.answer2 ||
      selectAnswer.answer3 ||
      selectAnswer.answer4
    ) {
      let value;
      const keys = Object.keys(selectAnswer);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (selectAnswer[key] === true) {
          value = i;
        }
      }
      console.log(value);
      const newAnswer = allAnswers;
      newAnswer.push(shuffeledAnswer[value]);
      console.log("New Answer " + newAnswer);
      setAllAnswers(newAnswer);
      console.log("AllAnswers======>" + allAnswers);
      setSelectAnswer({
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
      });
      if (currentQuestion === quesAns.length - 1) {
        navigate("/answer");
        // window.reload();
        return;
      }
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleQuestionChange1 = () => {
    if (currentQuestion === quesAns.length - 1) {
      navigate("/answer");
      // window.reload();
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePlayAgain = () => {
    setPlayAgain(!playAgain);
    setCurrentQuestion(0);
    setQuesAns([]);
    setAnswer({
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
    });
    setAllAnswers([]);
    navigate("/allQuiz");
    return;
  };

  const handleShowAnswer = () => {
    setCurrentQuestion(0);
    navigate("/allAnswer");
  };

  return (
    <GlobalContext.Provider
      value={{
        quesAns,
        setQuesAns,
        currentQuestion,
        setCurrentQuestion,
        answerHover,
        setAnswerHover,
        selectAnswer,
        setSelectAnswer,
        question,
        setQuestion,
        answer,
        setAnswer,
        clickOption,
        setClickOption,
        isStart,
        setIsStart,
        handleQuestionChange,
        allAnswers,
        handlePlayAgain,
        playAgain,
        setPlayAgain,
        handleShowAnswer,
        handleQuestionChange1,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
