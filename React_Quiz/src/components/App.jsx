import Header from "./Header";
import "../App.css";
import Main from "./Main";
import { useEffect, useReducer } from "react";
import StartPage from "./StartPage";
import Question from "./Question";
import Progress from "./Progress";
import FinishPage from "./FinishPage";
import Restart from "./Restart";
import Timer from "./Timer";

let initailState = {
  questions: [],
  status: "Loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  RemainingTime: null,
};
let time_per_Que = 30;
function reducer(state, action) {
  switch (action.type) {
    case "dataResolved":
      return { ...state, questions: action.payload, status: "ready" };
    case "getQuestions":
      console.log("getQuestion", action.payload);
      return {
        ...state,
        status: action.payload,
        RemainingTime: state.questions.length * time_per_Que,
      };
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
    case "finish":
      return {
        ...state,
        status: action.payload,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "Timer":
      return {
        ...state,
        RemainingTime: state.RemainingTime - 1,
        status: state.RemainingTime == 0 ? "finished" : state.status,
      };
    case "Re-Start":
      return { ...initailState, questions: state.questions, status: "ready" };

    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);
  const { questions, status, index, answer, points, highScore, RemainingTime } =
    state;

  useEffect(() => {
    async function getQuestion() {
      const data = await fetch(`http://localhost:3000/questions`);
      const res = await data.json();

      dispatch({ type: "dataResolved", payload: res });
    }
    getQuestion();
  }, []);

  let maxPoints = questions?.reduce((acc, curr) => acc + curr.points, 0);

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
            <Progress
              totalQues={questions.length}
              index={index}
              maxPoints={maxPoints}
              points={points}
              answer={answer}
            />
            <Question
              index={index}
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              totalQues={questions.length}
            />
            <Timer RemainingTime={RemainingTime} dispatch={dispatch} />
          </Main>
        )}
        {status == "finished" && (
          <>
            <FinishPage
              points={points}
              maxPoints={maxPoints}
              highScore={highScore}
            />
            <Restart dispatch={dispatch} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
