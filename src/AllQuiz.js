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
    handleQuestionChange,
    setPlayAgain,
    playAgain
  } = useContext(GlobalContext);

  return (
    <section key={currentQuestion} className="allQuiz">
      {quesAns.length > 0 ? (
        <>
          <div className="question">{quesAns[currentQuestion].question}</div>

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

export default AllQuiz;
