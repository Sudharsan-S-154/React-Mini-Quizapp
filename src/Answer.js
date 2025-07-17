import React, { useContext } from 'react'
import { GlobalContext } from './Context/MyContext';
import { Link } from 'react-router';

function Answer() {
  const {allAnswers, quesAns, handlePlayAgain, handleShowAnswer} = useContext(GlobalContext);
  // debugger
  let correctAnswer = 0;
  let dialogue = "awsome";
  if(quesAns.length>0){
    for(let i=0;i<allAnswers.length;i++){
        if(allAnswers[i]===quesAns[i].correct_answer){
            correctAnswer++;
        }
    }
  }
  if(correctAnswer>allAnswers.length-2){
     dialogue = "Did you eat the answer key for breakfast?......simply awsome!!!";
  }
  else if(correctAnswer>allAnswers.length/2){
      dialogue = "Respectable effort. Like eating salad and pretending you liked it.";
  }
  else{
    dialogue = "Your brain took a coffee break — and never came back.";
  }
  
  return (
    <section className='finalAnswers'>
        <h2 className='scoreText'>Total Score</h2>
        <p className='totalScore'>{`${correctAnswer} / ${allAnswers.length}`}</p>
        <h2 className='dialogue'>{dialogue}</h2>
        <div className='playAndShow'>
        <button className="playAgain" onClick={handlePlayAgain} >Play again</button>
        <button className="showAnswer" onClick={handleShowAnswer}>Show Answer</button>
        </div>
    </section>

  )
}

export default Answer