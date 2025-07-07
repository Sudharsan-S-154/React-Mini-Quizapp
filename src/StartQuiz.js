import React, { useContext } from "react";
import { Link } from "react-router";
import { GlobalContext } from "./assets/Context/MyContext";

function StartQuiz() {
  const { clickOption } = useContext(GlobalContext);
  return (
    <section className="startQuiz">
      <h3 className="title11"> {clickOption} </h3>
      <h2 className="title22"> QUIZ MASTER! </h2>
      <div className="quizDecision">
        <Link to="allQuiz">
          <button className="start"> Start </button>
        </Link>
      </div>
    </section>
  );
}

export default StartQuiz;
