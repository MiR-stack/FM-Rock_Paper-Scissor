import { styled } from "styled-components";
import { ReactComponent as bg } from "../../images/bg-pentagon.svg";

const Container = styled.div`
  margin-top: 150px;
  position: relative;
`;

const Bg = styled(bg)`
  height: 100%;
  width: 100%;
  object-fit: contain;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export { Container, Bg };
