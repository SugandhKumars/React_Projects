import Header from "./Header";
import "../App.css";
import Main from "./Main";
import { useEffect, useReducer } from "react";
let initailState = { questions: [] };
function reducer(state, action) {
  switch (action.type) {
    case "data":
      return { ...state, questions: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initailState);
  const { questions } = count;

  useEffect(() => {
    async function getQuestion() {
      const data = await fetch(`http://localhost:3000/questions`);
      const res = await data.json();
      console.log(res);
      dispatch({ type: "data", payload: res });
    }
    getQuestion();
  }, []);
  console.log(questions);
  return (
    <>
      <div>
        <Header />
        <Main questions={questions} />
      </div>
    </>
  );
}

export default App;
