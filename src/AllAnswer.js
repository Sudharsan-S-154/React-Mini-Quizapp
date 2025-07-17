import React, { useContext, useEffect, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { GlobalContext } from "./Context/MyContext";

function AllAnswer() {
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
    handleQuestionChange1,
    setPlayAgain,
    playAgain,
    allAnswers,
  } = useContext(GlobalContext);

  return (
    <section key={currentQuestion} className="allQuiz">
      {quesAns.length > 0 ? (
        <>
        <div className="numberAndResult">
          <div className="questionNumber">{` Question No. ${currentQuestion + 1} / ${
            quesAns.length
          }`}</div>
          {allAnswers[currentQuestion] ===
          quesAns[currentQuestion].correct_answer  ? (
            <div className="isCorrect">
              <FaCheckSquare />
              <span>correct</span>
            </div>
          ) : (
            <div className="isWrong">
              <ImCross />
              <span>Wrong</span>
            </div>
          )}
          </div>
          <div className="question">{quesAns[currentQuestion].question}</div>

          <div className="allAnswer">
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer1 &&
                "correctAnswer"
              }
              ${allAnswers[currentQuestion] === answer.answer1 && "yourAnswer"}
              }`}
            >
              {answer.answer1}
            </div>
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer2 &&
                "correctAnswer"
              } 
              ${allAnswers[currentQuestion] === answer.answer2 && "yourAnswer"}
              }`}
            >
              {answer.answer2}
            </div>
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer3 &&
                "correctAnswer"
              } 
              ${allAnswers[currentQuestion] === answer.answer3 && "yourAnswer"}

              }`}
            >
              {answer.answer3}
            </div>
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer4 &&
                "correctAnswer"
              } 
              ${allAnswers[currentQuestion] === answer.answer4 && "yourAnswer"}

              }`}
            >
              {answer.answer4}
            </div>
          </div>
          <div className="next">
            <button className="nextBtn" onClick={handleQuestionChange1}> Next </button>
          </div>
        </>
      ) : (
        <div className="loading">
          Loading.....
          {setPlayAgain(playAgain)}
        </div>
      )}
    </section>
  );
}

export default AllAnswer;
