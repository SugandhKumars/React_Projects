import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>Text Expander</div>
      <Text
        Expand={false}
        color={"blue"}
        p1={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quas
        accusantium dignissimos,`}
        p2={` vero repellat facere tempore animi praesentium
        vitae nihil soluta odio fugit nulla quod eveniet sed at quos porro`}
      />
      <Text
        style={"box"}
        Expand={true}
        color={"red"}
        p1={`MyEdu is an edu-tech firm that provides communication software solutions and apps for assisting school teachers, parents, as well as students. MyEdu's apps also help teachers in managing day-to-day activities in the most efficient way possible`}
        p2={`Help others know if MyEdu is the product for them by leaving a review. What can MyEdu do better? What do you like about it?`}
      />
    </>
  );
}

function Text({ Expand, color, p1, p2, style }) {
  const [show, setShow] = useState(Expand);
  return (
    <div className={style}>
      {p1}
      <span>{!show && "... "}</span>
      {show && <span>{p2}</span>}
      <span
        style={{ color: color, cursor: "pointer" }}
        onClick={(e) => {
          setShow(!show);
        }}
      >
        {show ? " Show less" : " Show more"}
      </span>
    </div>
  );
}

export default App;
