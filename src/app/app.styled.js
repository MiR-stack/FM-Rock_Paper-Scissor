import { styled } from "styled-components";

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

export { Container, Wraper };
