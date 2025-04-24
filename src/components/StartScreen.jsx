import AllButton from "./AllButton";

function StartScreen({ dispatch }) {
  return (
    <div className="text-center">
      <h2 className="mb-6 text-4xl font-bold">THE REACT QUIZ</h2>
      <AllButton onClick={() => dispatch({ type: "startQuiz" })}>
        Let's Start
      </AllButton>
    </div>
  );
}

export default StartScreen;
