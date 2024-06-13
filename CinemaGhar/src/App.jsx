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
    setSelectedMovie((selectedMovie) => (selectedMovie === id ? null : id));
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
function Right({ selectedMovie }) {
  const [hide, setHide] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    async function fetchMovieDetail() {
      if (!selectedMovie) return; // Check if selectedMovie has a value
      if (selectedMovie) setShow(true);
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&i=${selectedMovie}`
      );
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setMovieDetail(data);
    }
    fetchMovieDetail();
  }, [selectedMovie]);
  console.log(movieDetail);
  const addWatchlist = (movie) => {
    setWatchList(
      !watchList.includes(movie) ? [...watchList, movie] : [...watchList]
    );
  };
  console.log(watchList);
  console.log(selectedMovie);
  return (
    <>
      <div className="left">
        <button className="hide" onClick={() => setHide(!hide)}>
          -
        </button>
        {hide && !show && (
          <MovieDetail watchList={watchList} setWatchList={setWatchList} />
        )}
        {isLoading && "Loading..."}

        {show && hide && !isLoading && (
          <SelectedMovies
            movieDetail={movieDetail}
            addWatchlist={addWatchlist}
            selectedMovie={selectedMovie}
            setShow={setShow}
          />
        )}
        {show && (
          <button className="watching-btn" onClick={() => setShow(false)}>
            ◀
          </button>
        )}
      </div>
    </>
  );
}
function SelectedMovies({ movieDetail, addWatchlist, selectedMovie, setShow }) {
  return (
    <>
      <div className="selectedMovieDetails">
        <div className="movieCard">
          <div className="poster">
            <img src={movieDetail?.Poster} alt={movieDetail?.Title} />
          </div>
          <div className="details">
            <p className="title">{movieDetail?.Title}</p>
            <p className="release-Date">
              {movieDetail?.Release} <span> {movieDetail?.Runtime}</span>
            </p>
            <p>{movieDetail?.Genre}</p>
            <p>⭐{movieDetail?.imdbRating} IMDB Rating</p>
          </div>
        </div>
        <div className="star_and_add">
          <div className="starContainer">
            <div>Star</div>
            <button
              onClick={() => {
                addWatchlist(selectedMovie);
                setShow(false);
              }}
            >
              + Add to Watchlist
            </button>
          </div>
        </div>
        <div className="description">
          <p>{movieDetail?.Plot}</p>
          <p className="actors">Starring {movieDetail?.Actors}</p>
          <p className="director">Directed by {movieDetail?.Director}</p>
        </div>
      </div>
    </>
  );
}
function WatchList({ watchList }) {
  const [myWatchList, setMyWatchList] = useState();
  console.log(watchList);
  useEffect(() => {
    if (watchList.length <= 0) return;
    const fetchData = async (id) => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${key}&i=${id}`
      );
      return response.json();
    };
    const fetchAllData = async () => {
      const dataPromise = watchList.map((id) => fetchData(id));
      const allData = await Promise.all(dataPromise);
      setMyWatchList(allData);
    };
    fetchAllData();
  }, []);
  console.log(myWatchList);
  return (
    <>
      <div className="my-Watchlist">
        {myWatchList?.map((movie) => {
          return (
            <WatchListMovie
              key={movie?.imdbID}
              poster={movie?.Poster}
              title={movie?.Title}
              rating={movie?.imdbRating}
              movieLength={movie?.Runtime}
            />
          );
        })}
      </div>
    </>
  );
}
function WatchListMovie({ poster, title, rating, movieLength }) {
  return (
    <>
      <div className="watchlist_Movie">
        <div className="poster_container">
          <img src={poster} alt={title} />
        </div>
        <div className="movie-details">
          <p className="title">{title}</p>
          <div className="rating-and-time">
            <p className="imdbRating">⭐{rating}</p>
            <p className="user-rating">🌟8</p>
            <p className="movie-length">⌛{movieLength}</p>
          </div>
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
function MovieDetail({ watchList, setWatchList }) {
  console.log("MovieDetail");
  return (
    <>
      <div className="movie-detail">
        <p className="big">Movies You Have Watched</p>
        <div className="movie-details-des">
          <p>{watchList.length} Movies</p>
          <p>⭐0</p>
          <p>🌟0</p>
          <p>⌛120 min</p>
        </div>
      </div>
      <WatchList watchList={watchList} />
    </>
  );
}
export default App;
