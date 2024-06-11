import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <MovieContainers />
      </div>
    </>
  );
}

function NavBar() {
  return (
    <>
      <div className="Navbar">
        <Logo />
        <Searchbar />
        <Results />
      </div>
    </>
  );
}
function Logo() {
  return (
    <>
      <div className="nav-Items">🤞Cinema Ghar🎥</div>
    </>
  );
}
function Searchbar() {
  return (
    <>
      <div className="nav-Items ">
        <input type="text" placeholder="Search " />
      </div>
    </>
  );
}
function Results() {
  return (
    <>
      <div className="nav-Items result">Results</div>
    </>
  );
}
function MovieContainers() {
  return (
    <>
      <div className="movie-Containers">
        <Left />
        <Right />
      </div>
    </>
  );
}
function Left() {
  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="left">
        {hide && <MovieList />}
        <button className="hide" onClick={() => setHide(!hide)}>
          -
        </button>
      </div>
    </>
  );
}
function Right() {
  const [hide, setHide] = useState(true);
  return (
    <>
      <div className="left">
        {hide && <MovieDetail />}
        <button className="hide" onClick={() => setHide(!hide)}>
          -
        </button>
      </div>
    </>
  );
}
function MovieList() {
  return (
    <>
      <div>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </>
  );
}
function Movie() {
  return (
    <>
      <div className="Movie">
        <div className="posterContainer">
          <img src="" alt="" />
        </div>
        <div className="Movie_Name_Date">
          <p>Nadiya Ke Paar</p>
          <p>1996</p>
        </div>
      </div>
    </>
  );
}
function MovieDetail() {
  return (
    <>
      <div>MovieDetails</div>
    </>
  );
}
export default App;
