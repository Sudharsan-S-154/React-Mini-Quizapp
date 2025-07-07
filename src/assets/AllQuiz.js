import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "./Context/MyContext";

function AllQuiz() {
  const {
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
  } = useContext(GlobalContext);

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&category=9&type=multiple"
        );
        const allQuestionAnswer = response.data.results;
        setQuesAns(allQuestionAnswer);
      } catch (e) {
        console.log(e);
      }
    };
    getQuestions();
  }, []);

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
      const newAnswer = {
        answer1: shuffledAnswer[0],
        answer2: shuffledAnswer[1],
        answer3: shuffledAnswer[2],
        answer4: shuffledAnswer[3],
      };
      setAnswer(newAnswer);
    }
  }, [quesAns, currentQuestion]);

  const handleQuestionChange = () => {
    debugger;
    if (
      selectAnswer.answer1 ||
      selectAnswer.answer2 ||
      selectAnswer.answer3 ||
      selectAnswer.answer4
    ) {
      setSelectAnswer({
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
      });
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswerSelect = () => {};

  return (
    <section key={currentQuestion} className="allQuiz">
      {quesAns.length > 0 ? (
        <div className="question">{quesAns[currentQuestion].question}</div>
      ) : (
        <div className="question">
          Sorry, currently no questions are available
        </div>
      )}
      <div className="allAnswer">
        <div
          className={`answer ${selectAnswer.answer1 && "selectedAnswer"} ${
            answerHover && "answerHover"
          }`}
          onClick={() => {
            setSelectAnswer({
              answer1: true,
              answer2: false,
              answer3: false,
              answer4: false,
            });
            setAnswerHover(false);
          }}
        >
          {answer.answer1}
        </div>
        <div
          className={`answer ${selectAnswer.answer2 && "selectedAnswer"} ${
            answerHover && "answerHover"
          }`}
          onClick={() => {
            setSelectAnswer({
              answer1: false,
              answer2: true,
              answer3: false,
              answer4: false,
            });
            setAnswerHover(false);
          }}
        >
          {answer.answer2}
        </div>
        <div
          className={`answer ${selectAnswer.answer3 && "selectedAnswer"} ${
            answerHover && "answerHover"
          }`}
          onClick={() => {
            setSelectAnswer({
              answer1: false,
              answer2: false,
              answer3: true,
              answer4: false,
            });
            setAnswerHover(false);
          }}
        >
          {answer.answer3}
        </div>
        <div
          className={`answer ${selectAnswer.answer4 && "selectedAnswer"} ${
            answerHover && "answerHover"
          }`}
          onClick={() => {
            setSelectAnswer({
              answer1: false,
              answer2: false,
              answer3: false,
              answer4: true,
            });
            setAnswerHover(false);
          }}
        >
          {answer.answer4}
        </div>
      </div>
      <div className="next">
        <button onClick={handleQuestionChange}> Next </button>
      </div>
    </section>
  );
}

export default AllQuiz;
