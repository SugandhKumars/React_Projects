import Header from "./Header";
import "../App.css";
import Main from "./Main";
import { useEffect, useReducer } from "react";
import StartPage from "./StartPage";
import Question from "./Question";

let initailState = { questions: [], status: "Loading", index: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "dataResolved":
      return { ...state, questions: action.payload, status: "ready" };
    case "getQuestions":
      return { ...state, status: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);
  const { questions, status, index } = state;

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
        {status == "active" && <Question question={questions[index]} />}
      </div>
    </>
  );
}

export default App;
