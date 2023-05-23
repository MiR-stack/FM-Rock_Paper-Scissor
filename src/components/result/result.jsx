import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  PickSkelton,
  PickTitle,
  Picked,
  ResultWraper,
  ResultWraper2,
  WinTitle,
  Wraper,
} from "./result.styled";
import Item from "../Item/item";
import { data } from "../Item/items.data";

function Result({ userPick, computerPick, value, playAgain }) {
  const userPicked = data.find((item) => item.name === userPick);

  const [result, setResult] = useState({
    computerPicked: null,
    showResult: false,
  });

  useEffect(() => {
    const setTime = setTimeout(() => {
      setResult((prev) => ({
        ...prev,
        computerPicked: data.find((item) => item.name === computerPick),
      }));
    }, 1000);

    const setTime2 = setTimeout(() => {
      setResult((prev) => ({
        ...prev,
        showResult: true,
      }));
    }, 2000);

    return () => {
      clearTimeout(setTime2);
      clearTimeout(setTime);
    };
  }, [computerPick]);

  console.log(value);

  return (
    <Wraper>
      <Container>
        <Picked>
          <PickTitle>You Picked</PickTitle>
          <Item {...userPicked} action="result" />
        </Picked>
        {result.showResult && (
          <ResultWraper>
            <WinTitle> you {value ? "win" : "lose"}</WinTitle>
            <Button onClick={playAgain}>play again</Button>
          </ResultWraper>
        )}
        <Picked>
          <PickTitle>the house picked</PickTitle>
          {result.computerPicked ? (
            <Item {...result.computerPicked} action="result" />
          ) : (
            <PickSkelton />
          )}
        </Picked>
      </Container>
      {result.showResult && (
        <ResultWraper2>
          <WinTitle> you {value ? "win" : "lose"} </WinTitle>
          <Button onClick={playAgain}>play again</Button>
        </ResultWraper2>
      )}
    </Wraper>
  );
}

export default Result;
