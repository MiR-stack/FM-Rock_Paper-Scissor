import React, { useEffect, useState } from "react";
import game from "./game";
import { styled } from "styled-components";
import Topbar from "./components/topbar/topbar";
import Main from "./components/main/main";
import Rules from "./components/rules/rules";
import Result from "./components/result/result";
import Extra from "./components/_extra/extra";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(
    circle at 50% 0%,
    hsl(214, 47%, 23%),
    hsl(237, 49%, 15%)
  );
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  padding: 0 50px;
`;

const Wraper = styled.div`
  width: 1366px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  @media (max-width: 900px) {
    padding: 40px 20px;
  }
  @media (max-width: 600px) {
    padding: 40px 10px;
  }

  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-between;
  }
`;

function App() {
  const [state, setState] = useState("home");
  const [result, setResult] = useState();
  const [score, setScore] = useState("init");

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
    if (score !== "init") {
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

  const [extra, setExtra] = useState(true);

  const handleExtra = () => {
    setExtra(!extra);
  };

  const handleFun = () => {
    alert(
      "kiii tumi amare valobasho na. jao bago tumer ar game khela lagbo na."
    );
  };

  return (
    <Container>
      <Wraper>
        {extra ? <Extra handleExtra={handleExtra} handleFun={handleFun} /> : ""}

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
