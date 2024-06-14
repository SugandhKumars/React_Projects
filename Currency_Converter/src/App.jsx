import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [convert, setConvert] = useState("");

  useEffect(() => {
    if (!from || !to || !input) return;
    async function fetchCurrency() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`
      );
      const data = await res.json();
      setConvert(data?.rates);
    }
    if (from == to) {
      setConvert(input);
      return;
    }
    fetchCurrency();
  }, [to, from, input]);
  console.log(convert[to]);
  console.log(to);
  return (
    <>
      <div>Currency Converter</div>
      <div className="container">
        <Input input={input} setInput={setInput} />
        <FromCurrency from={from} setFrom={setFrom} />
        <ToCurrency to={to} setTo={setTo} />
      </div>
      <p>
        {convert[to] || convert
          ? (convert[to] || convert) + " " + to
          : "Result"}
      </p>
    </>
  );
}

function Input({ input, setInput }) {
  return (
    <>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(Number(e.target.value));
          }}
        />
      </div>
    </>
  );
}
function FromCurrency({ from, setFrom }) {
  return (
    <>
      <div>
        <label htmlFor="">From Currency </label>
        <select
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        >
          <option value="" disabled>
            --Select Currency--
          </option>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </>
  );
}
function ToCurrency({ to, setTo }) {
  return (
    <>
      <div className="main-container">
        <label>To Currency </label>
        <select
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        >
          <option value="" disabled>
            --Select Currency--
          </option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </>
  );
}
export default App;
