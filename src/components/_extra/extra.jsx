import React from "react";
import { styled } from "styled-components";
import bg from "../../images/annie-spratt-wuc-KEIBrdE-unsplash.jpg";

const Container = styled.div`
  width: 300px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${bg});
  background-position: center;
  background-size: cover;
  z-index: 99;
  text-transform: capitalize;
  font-size: 20px;
  word-spacing: 5px;
  line-height: 140%;
  color: #ebe8e8;
  overflow: hidden;

  /* @media (max-width: 600px) {
    width: 90%;
  } */
`;

const Wraper = styled.div`
  height: 100%;
  width: 100%;
  background: #2978ff57;
  padding: 20px;
`;

const Span = styled.span`
  color: ${(props) => props.color};
  margin: 0 4px;
`;

const BtnGroup = styled.div`
  border: 1px solid #ffc400;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 30px;
  text-transform: capitalize;
  border: none;
  color: #ffc400;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:nth-child(1) {
    border-radius: 10px 0 0 10px;
    background: #ffc400;
    color: white;
  }
`;

const Backdrop = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: 98;
`;

function Extra({ handleExtra, handleFun }) {
  return (
    <>
      <Backdrop />
      <Container>
        <Wraper>
          {" "}
          <p>
            Cause all of me, loves all of you. Love your curves and all your
            edges; all your perfect imperfections. Give your all to me, I'll
            give my all to you. You're my end and my beginning. Even when I lose
            I'm winning.
            <Span color="red"> i love you</Span>
            <Span color="white">Fiya </Span>
          </p>
          <BtnGroup>
            <Button onClick={handleExtra}> i love you too</Button>
            <Button onClick={handleFun}> i hate you</Button>
          </BtnGroup>
        </Wraper>
      </Container>
    </>
  );
}

export default Extra;
