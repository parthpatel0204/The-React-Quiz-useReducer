import { useEffect, useReducer } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import EndScreen from "./components/EndScreen";

const initialState = {
  question: [],
  start: false,
  currentQuestion: 0,
  point: 0,
  selectedAnswers: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "allQuestion":
      return { ...state, question: action.payload };

    case "startQuiz":
      return {
        ...state,
        start: true,
      };

    case "nextQuestion":
      return { ...state, currentQuestion: state.currentQuestion + 1 };

    case "backQuestion":
      return { ...state, currentQuestion: state.currentQuestion - 1 };

    case "questionPoint":
      return { ...state, point: state.point + action.payload };

    case "selectAnswer": {
      const updated = [...state.selectedAnswers];
      updated[state.currentQuestion] = action.payload;

      return { ...state, selectedAnswers: updated };
    }

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "allQuestion", payload: data }))
      .catch((err) => console.error(err));
  }, []);

  function selectOption(i) {
    dispatch({ type: "selectAnswer", payload: i });

    const correctIndex = state.question[state.currentQuestion]?.correctOption;
    console.log(correctIndex);

    const questionPoint = state.question[state.currentQuestion]?.points;

    if (i === correctIndex) {
      alert("Right Answer");
      dispatch({ type: "questionPoint", payload: questionPoint });
    } else {
      alert("Wrong Answer");
    }
    console.log("selected");
  }

  return (
    <div className="flex h-screen place-items-center justify-center bg-[#ddddff75] align-middle font-roboto">
      {state.currentQuestion >= state.question.length ? (
        <EndScreen point={state.point} />
      ) : state.start ? (
        <Questions
          data={state.question[state.currentQuestion]}
          dispatch={dispatch}
          currentQuestion={state.currentQuestion}
          // backQuestion={backQuestion}
          selectOption={selectOption}
          selectedAnswers={state.selectedAnswers}
        />
      ) : (
        <StartScreen dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;
