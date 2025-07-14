import React, { useContext } from "react";
import { Link } from "react-router";
import { GlobalContext } from "./Context/MyContext";

function QuizTitles() {
  const { isStart, setIsStart, setClickOption } = useContext(GlobalContext);
  return (
    <section className="quizTitles">
      <h3 className="title1"> Think you're </h3>
      <h2 className="title2">QUIZ MASTER ?</h2>
      <div className="quizDecision">
        <button
          className="yes"
          onClick={() => {
            setClickOption("click start to prove");
            setIsStart(false);
          }}
        >
          Yes
        </button>
        <button
          className="no"
          onClick={() => {
            setClickOption("Don't act smart click start");
            setIsStart(false);
          }}
        >
          No
        </button>
      </div>
    </section>
  );
}

export default QuizTitles;
