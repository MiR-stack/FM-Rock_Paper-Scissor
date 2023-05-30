import React, { useEffect, useState } from "react";
import Topbar from "../components/topbar/topbar";
import Main from "../components/main/main";
import Rules from "../components/rules/rules";
import Result from "../components/result/result";
import { Container, Wraper } from "./app.styled";
import useGame from "../hooks/game";

function App() {
  const [state, setState] = useState("home");
  const [result, setResult] = useState();
  const [score, setScore] = useState(0);
  const game = useGame();

  const handleResult = (userSelect) => {
    setResult(game(userSelect));
    setState("result");
  };

  const playAgain = () => {
    setState("home");
  };

  useEffect(() => {
    const initScore = localStorage.getItem("score");
    console.log("initScore", initScore);

    if (initScore) {
      setScore(Number(initScore));
    }
  }, []);

  useEffect(() => {
    if (score !== 0) {
      console.log("rached");
      localStorage.setItem("score", score);
    }
  }, [score]);

  useEffect(() => {
    if (result) {
      if (result.value) {
        setScore((prev) => prev + 1);
      } else {
        setScore((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }
  }, [result]);

  return (
    <Container>
      <Wraper>
        <Topbar score={score} />
        {state === "home" ? (
          <Main handleResult={handleResult} />
        ) : (
          <Result {...result} playAgain={playAgain} />
        )}
        <Rules />
      </Wraper>
    </Container>
  );
}

export default App;
