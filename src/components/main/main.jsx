import React from "react";
import { Bg, Container } from "./main.styled";
import { data } from "../Item/items.data";
import Item from "../Item/item";

function Main({ handleResult }) {
  return (
    <Container>
      <Bg />
      {data.map((item) => (
        <Item
          {...item}
          height="120px"
          width="125px"
          onClick={() => handleResult(item.name)}
        />
      ))}
    </Container>
  );
}

export default Main;
