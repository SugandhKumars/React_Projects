import Header from "./Header";
import "../App.css";
import Main from "./Main";
import { useEffect, useReducer } from "react";
import StartPage from "./StartPage";
import Question from "./Question";

let initailState = {
  questions: [],
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataResolved":
      return { ...state, questions: action.payload, status: "ready" };
    case "getQuestions":
      console.log("getQuestion", action.payload);
      return { ...state, status: action.payload };
    case "answer":
      console.log("answer", action.payload);
      const currQuestion = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currQuestion.correctOptions
            ? state.points + currQuestion.points
            : state.points,
      };
    case "nextQue":
      return { ...state, index: action.payload, answer: null };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);
  const { questions, status, index, answer } = state;

  useEffect(() => {
    async function getQuestion() {
      const data = await fetch(`http://localhost:3000/questions`);
      const res = await data.json();
      console.log(res);
      dispatch({ type: "dataResolved", payload: res });
    }
    getQuestion();
  }, []);

  return (
    <>
      <div className="poppins-regular">
        <Header />
        {status == "Loading" && <Main>Loading</Main>}
        {status == "ready" && (
          <Main>
            <StartPage dispatch={dispatch} question={questions} />
          </Main>
        )}
        {status == "active" && (
          <Main>
            <Question
              index={index}
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          </Main>
        )}
      </div>
    </>
  );
}

export default App;
