import { styled } from "styled-components";
import { ReactComponent as close } from "../../images/icon-close.svg";

const Container = styled.div`
  width: 100%;
  @media (max-width: 900px) {
    margin: 50px;
  }
`;

const Button = styled.button`
  border: 2px solid hsl(217, 16%, 45%);
  color: white;
  text-transform: uppercase;
  padding: 10px 30px;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  letter-spacing: 2px;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const Backdrop = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const ModalBody = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;

  @media (max-width: 600px) {
    height: 100vh;
    width: 100%;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Title = styled.h1`
  text-transform: uppercase;
  color: hsl(229, 25%, 31%);
`;

const Close = styled(close)`
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Close2 = styled(Close)`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const CloseWraper = styled(Header)`
  margin-top: 30px;
`;

export {
  Container,
  Button,
  Backdrop,
  ModalBody,
  Header,
  Title,
  Close,
  CloseWraper,
  Close2,
};
