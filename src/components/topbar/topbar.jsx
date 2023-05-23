import React from "react";
import { ReactComponent as Icon } from "../../images/logo-bonus.svg";

import { Container, ScoreWraper, Score, Title } from "./topbar.styled";

function Topbar({ score }) {
  return (
    <Container>
      <Icon />
      <ScoreWraper>
        <Title>score</Title>
        <Score>{score} </Score>
      </ScoreWraper>
    </Container>
  );
}

export default Topbar;
