import { useState } from "react";
import "./App.css";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
function App() {
  return (
    <>
      <div>
        <StarRating />
      </div>
    </>
  );
}
function StarRating() {
  const [stars, setStars] = useState(0);
  const handleStar = (stCount) => {
    setStars(stCount);
  };

  return (
    <>
      <div className="main-Container" style={{ display: "flex", gap: "4px" }}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            onSetStar={handleStar}
            index={i}
            full={stars >= i + 1}
          />
        ))}
        <p style={{ marginLeft: "40px" }}>{stars > 0 && stars}</p>
      </div>
    </>
  );
}

function Star({ onSetStar, index, full }) {
  return (
    <>
      <div className="star-container">
        <p
          onClick={() => {
            onSetStar(index + 1);
          }}
        >
          {full ? (
            <TiStarFullOutline
              style={{ fontSize: "48px", cursor: "pointer" }}
            />
          ) : (
            <CiStar
              style={{
                fontSize: "48px",
                cursor: "pointer",
              }}
            />
          )}
        </p>

        {/* <TiStarFullOutline /> */}
      </div>
    </>
  );
}
export default App;
