import React, { useContext, useState } from "react";
import QuizImg from "./assets/QuizImg.png";
import QuizTitles from "./QuizTitles";
import { Routes, Route, Outlet } from "react-router";
import StartQuiz from "./StartQuiz";
import { GlobalContext } from "./Context/MyContext";

function HomePage() {
  const { isStart, setIsStart, clickOption, setClickOption } = useContext(GlobalContext);
  return (
    <article className="homePage">
      {isStart ? (
        <QuizTitles />
      ) : (
        <StartQuiz />
      )}
      <section className="quizImg">
        <img className="originalQuizImg" src={QuizImg}></img>
      </section>
    </article>
  );
}

export default HomePage;
