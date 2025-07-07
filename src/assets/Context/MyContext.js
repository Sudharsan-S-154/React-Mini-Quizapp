import React,{createContext, useContext, useState} from 'react'

export const GlobalContext = createContext();

export const MyContext = ({children}) => {

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
   <GlobalContext.Provider value={{
         quesAns,setQuesAns,
         currentQuestion,setCurrentQuestion,
         answerHover,setAnswerHover,
         selectAnswer,setSelectAnswer,
         question,setQuestion,
         answer,setAnswer,
         clickOption,setClickOption,
         isStart,setIsStart

   }}>
    {children}

   </GlobalContext.Provider>
  )
}



