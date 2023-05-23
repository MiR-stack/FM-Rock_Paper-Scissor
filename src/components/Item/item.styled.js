import { styled, keyframes } from "styled-components";

const grow = keyframes`
0% {height:0px; width:0px; overflow: hidden;}
100% {height:calc(6vw + 9rem);
    width:calc(6vw + 10rem);}
`;

const mobileGrow = keyframes`
0% {height:0px; width:0px; overflow: hidden;}
100% { height:100px;
    width:105px;}
`;

const Wraper = styled.div`
  position: absolute;
  height: ${(props) => (props.height ? props.height : "100px")};
  width: ${(props) => (props.width ? props.width : "110px")};
  border-radius: 50%;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  background: ${(props) => props.bg2};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  animation: ${(props) => (props.action === "result" ? grow : "")} 1s;

  ${(props) =>
    props.action === "result" &&
    `
  
    position:relative;
    height:calc(6vw + 9rem);
    width:calc(6vw + 10rem);
    cursor:default;
    max-height:350px;
    max-width:360px;

    @media (max-width: 900px) {
    height:150px;
    width:160px;
  }


  `}

  @media (max-width: 400px) {
    animation: ${(props) => (props.action === "result" ? mobileGrow : "")} 1s;
  }

  @media (max-width: 400px) {
    height: 100px;
    width: 105px;
  }

  &::after {
    height: 100%;
    width: 100%;
    content: "";
    position: absolute;
    background: ${(props) => props.bg1};
    border-radius: 50%;
    top: -5%;
  }
  &::before {
    height: 80%;
    width: 80%;
    content: "";
    position: absolute;
    background: #e3e4e6;
    border-radius: 50%;
    z-index: 3;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }
`;

const Icon = styled.div`
  height: 78%;
  width: 80%;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 9%;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Wraper, Icon };
