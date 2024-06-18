import Question from "./Question";

export default function Main({ questions }) {
  return (
    <>
      <div className="main">
        <h2>Welcome to React Quiz</h2>
        <p>X Question to test your Mastery</p>
        {questions.map((ques) => (
          <Question
            key={ques?.id}
            question={ques?.question}
            Options={ques?.options}
          />
        ))}
      </div>
    </>
  );
}
