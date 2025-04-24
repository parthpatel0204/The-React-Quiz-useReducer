import AllButton from "./AllButton";
import Options from "./Options";

function Questions({
  data,
  dispatch,
  selectOption,
  selectedAnswers,
  currentQuestion,
}) {
  return (
    <div className="min-h-[550px] w-full max-w-[600px]">
      <h3 className="mb-[80px] text-2xl font-bold text-black">
        {currentQuestion + 1}. {data.question}
      </h3>

      <div className="mb-[80px]">
        <Options
          selectOption={selectOption}
          options={data.options}
          selected={selectedAnswers[currentQuestion]}
          correctOption={data.correctOption}
        />
      </div>
      <div className="flex justify-between">
        {currentQuestion > 0 && (
          <AllButton
            disabled={currentQuestion === 0}
            onClick={() => dispatch({ type: "backQuestion" })}
          >
            Back
          </AllButton>
        )}
        {selectedAnswers[currentQuestion] !== undefined && (
          <AllButton onClick={() => dispatch({ type: "nextQuestion" })}>
            {currentQuestion === 14 ? "Finish" : "Next"}
          </AllButton>
        )}
      </div>
    </div>
  );
}

export default Questions;
