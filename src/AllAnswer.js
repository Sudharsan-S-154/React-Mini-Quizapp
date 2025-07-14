import React, { useContext, useEffect, useState } from "react";
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
    allAnswer,
  } = useContext(GlobalContext);

  return (
    <section key={currentQuestion} className="allQuiz">
      {quesAns.length > 0 ? (
        <>
          <div className="question">{quesAns[currentQuestion].question}</div>

          <div className="allAnswer">
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer1 &&
                "correctAnswer"
              } 
              }`}
            >
              {answer.answer1}
            </div>
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer2 &&
                "correctAnswer"
              } 
              }`}
            >
              {answer.answer2}
            </div>
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer3 &&
                "correctAnswer"
              } 

              }`}
            >
              {answer.answer3}
            </div>
            <div
              className={`answer ${
                quesAns[currentQuestion].correct_answer === answer.answer4 &&
                "correctAnswer"
              } 

              }`}
            >
              {answer.answer4}
            </div>
          </div>
          <div className="next">
            <button onClick={handleQuestionChange1}> Next </button>
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
