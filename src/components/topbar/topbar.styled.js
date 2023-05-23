import { styled } from "styled-components";

const Container = styled.div`
  border: 2px solid hsl(217, 16%, 45%);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  width: 80%;
  border-radius: 10px;
  height: 140px;

  @media (max-width: 900px) {
    height: 100px;
    padding: 10px 15px;
    width: 100%;
  }
`;
const ScoreWraper = styled.div`
  background: white;
  padding: 10px 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    padding: 10px 20px;
  }
`;
const Title = styled.p`
  font-size: calc(1vw + 1rem);
  font-weight: 600;
  color: hsl(229, 64%, 46%);

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
const Score = styled.h1`
  color: hsl(229, 25%, 31%);
  font-weight: 700;
  font-size: 50px;
  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

export { Container, ScoreWraper, Title, Score };
