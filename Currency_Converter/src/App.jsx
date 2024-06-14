import "./App.css";

function App() {
  return (
    <>
      <div>Currency Converter</div>
      <FromCurrency />
      <ToCurrency />
    </>
  );
}

function FromCurrency() {
  return (
    <>
      <div>
        <select name="" id="">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </>
  );
}
function ToCurrency() {
  return (
    <>
      <div className="main-container">
        <select name="" id="">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </>
  );
}
export default App;
