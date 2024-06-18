import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "change":
      return { ...state, count: action.payload };
    case "StepChange":
      return { ...state, step: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  let initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  return (
    <>
      <div>UseReducer</div>
      <Step step={step} dispatch={dispatch} />
      <Count count={count} dispatch={dispatch} />
    </>
  );
}
function Count({ dispatch, count }) {
  const handleIncrement = () => {
    dispatch({ type: "inc" });
  };
  const handleDecrement = () => {
    dispatch({ type: "dec" });
  };

  function handleValue(e) {
    dispatch({ type: "change", payload: Number(e.target.value) });
  }
  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <input type="text" value={count} onChange={handleValue} />
      <button onClick={handleIncrement}>+</button>
    </>
  );
}

function Step({ step, dispatch }) {
  // const handleStep = (e) => {
  //   dispatch;
  // };
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={20}
          value={step}
          onChange={(e) => {
            dispatch({ type: "StepChange", payload: Number(e.target.value) });
          }}
        />
        <span>{step}</span>
      </div>
    </>
  );
}
export default App;
