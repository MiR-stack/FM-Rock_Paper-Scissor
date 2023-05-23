import { keyframes, styled } from "styled-components";

const grow = keyframes`
0% {height:0px; width:0px; overflow: hidden;}
100% {height: 150px; width:165px}
`;

const MobileGrow = keyframes`
0% {height:0px; width:0px; overflow: hidden;}
100% {height: 100px; width:105px}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;

  @media (max-width: 600px) {
    gap: 50px;
  }
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 900px) {
    gap: 30px;
  }
`;
const PickSkelton = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background: hsl(229, 25%, 31%);
  animation-name: ${grow};
  animation-duration: 1s;
  animation-iteration-count: 3;

  @media (max-width: 900px) {
    animation-name: ${MobileGrow};
  }
`;

const Picked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const PickTitle = styled.h1`
  font-size: calc(1vw + 0.4rem);
  text-align: center;
`;

const ResultWraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ResultWraper2 = styled(ResultWraper)`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;

const WinTitle = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  color: white;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 15px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 20px;
`;

const WinEffect = styled.div`
  height: 600px;
  width: 600px;
  background: rgba(201, 201, 199, 0.05);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 24%;
  left: ${(props) => props.left}%;
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    height: 80%;
    width: 80%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    height: 60%;
    width: 60%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`;

export {
  Container,
  Wraper,
  Picked,
  PickTitle,
  ResultWraper,
  ResultWraper2,
  WinTitle,
  Button,
  PickSkelton,
  WinEffect,
};
