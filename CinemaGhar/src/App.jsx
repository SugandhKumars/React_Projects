import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="main">
        <NavBar query={query} setQuery={setQuery} />
        <MovieContainers query={query} />
      </div>
    </>
  );
}

function NavBar({ query, setQuery }) {
  return (
    <>
      <div className="Navbar">
        <Logo />
        <Searchbar query={query} setQuery={setQuery} />
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
function Searchbar({ query, setQuery }) {
  return (
    <>
      <div className="nav-Items ">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
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
function MovieContainers({ query }) {
  const [selectedMovie, setSelectedMovie] = useState("");
  const handleSelect = (id) => {
    // console.log(id);
    setSelectedMovie(id);
  };
  return (
    <>
      <div className="movie-Containers">
        <Left query={query} handleSelect={handleSelect} />
        <Right
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      </div>
    </>
  );
}
let key = "31018f1c";
function Left({ query, handleSelect }) {
  const [hide, setHide] = useState(true);
  const [movielist, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&s=${query}`
      );
      const data = await res.json();
      setLoading(false);
      setMovieList(data.Search);
    }
    fetchMovies();
  }, [query]);

  return (
    <>
      <div className="left">
        {isLoading
          ? "Loading ..."
          : hide &&
            movielist?.map((movie) => {
              return (
                <MovieList
                  onSelect={handleSelect}
                  key={movie?.imdbID}
                  title={movie?.Title}
                  poster={movie?.Poster}
                  year={movie?.Year}
                  id={movie?.imdbID}
                />
              );
            })}
        <button className="hide" onClick={() => setHide(!hide)}>
          -
        </button>
      </div>
    </>
  );
}
function Right({ selectedMovie, setSelectedMovie }) {
  const [hide, setHide] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchMovieDetail() {
      if (!selectedMovie) return; // Check if selectedMovie has a value

      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&i=${selectedMovie}`
      );
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setMovieDetail([...movieDetail, data]);
    }
    fetchMovieDetail();
  }, [selectedMovie]);
  console.log(movieDetail);
  return (
    <>
      <div className="left">
        <button className="hide" onClick={() => setHide(!hide)}>
          -
        </button>
        {hide && !selectedMovie && <MovieDetail />}
        {isLoading && "Loading..."}
        {selectedMovie &&
          hide &&
          !isLoading &&
          movieDetail?.map((movie) => {
            return (
              <SelectedMovies
                key={movie?.imdbID}
                poster={movie?.Poster}
                title={movie?.Title}
                setSelectedMovie={setSelectedMovie}
                runTime={movie?.Runtime}
                genre={movie?.Genre}
                release={movie?.DVD}
                actors={movie?.Actors}
                directors={movie?.Director}
                plot={movie?.Plot}
                rating={movie?.imdbRating}
              />
            );
          })}
        {selectedMovie && (
          <button className="watching-btn" onClick={() => setSelectedMovie("")}>
            ◀
          </button>
        )}
      </div>
    </>
  );
}
function SelectedMovies({
  poster,
  title,
  runTime,
  genre,
  release,
  actors,
  directors,
  plot,
  rating,
}) {
  return (
    <>
      <div className="selectedMovieDetails">
        <div className="movieCard">
          <div className="poster">
            <img src={poster} alt={title} />
          </div>
          <div className="details">
            <p className="title">{title}</p>
            <p className="release-Date">
              {release} <span>. {runTime}</span>
            </p>
            <p>{genre}</p>
            <p>⭐{rating} IMDB Rating</p>
          </div>
        </div>
        <div className="description">
          <p>{plot}</p>
          <p className="actors">Starring {actors}</p>
          <p className="director">Directed by {directors}</p>
        </div>
      </div>
    </>
  );
}
function MovieList({ title, poster, year, id, onSelect }) {
  return (
    <>
      <div>
        <Movie
          title={title}
          poster={poster}
          year={year}
          id={id}
          onSelect={onSelect}
        />
      </div>
    </>
  );
}
function Movie({ title, poster, year, id, onSelect }) {
  return (
    <>
      <div className="Movie" onClick={() => onSelect(id)}>
        <div className="posterContainer">
          <img src={poster} alt={title} />
        </div>
        <div className="Movie_Name_Date">
          <p>{title}</p>
          <p>{year}</p>
        </div>
      </div>
    </>
  );
}
function MovieDetail() {
  return (
    <>
      <div className="movie-detail">
        <p className="big">Movies You Have Watched</p>
        <div className="movie-details-des">
          <p>0 Movies</p>
          <p>⭐0</p>
          <p>🌟0</p>
          <p>⌛120 min</p>
        </div>
      </div>
    </>
  );
}
export default App;
