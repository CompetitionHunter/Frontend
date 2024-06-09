import styled from "styled-components";

const Bubbles = () => {
  return (
    <Container>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
      <Bubble>
        <span />
      </Bubble>
    </Container>
  );
};

const Container = styled.div`
  z-index: -1;
  position: absolute;
  height: 15vh;
  bottom: 3vh;
  width: 100vw;
  margin: 0;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const Bubble = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: rgb(214, 230, 242, 0.5);
  /* border: 2px solid #d6e6f2; */
  border-radius: 1.5rem;
  position: absolute;
  /* top: 10%;
  left: 10%; */
  animation: 4s linear infinite;
  span {
    height: 0.7rem;
    width: 0.7rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    /* box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1rem; */
    position: absolute;
    top: 20%;
    right: 20%;
  }
  &:nth-child(1) {
    top: 20%;
    left: 83%;
    animation: scaleSpin 8s linear infinite;
  }
  &:nth-child(2) {
    top: 60%;
    left: 80%;
    animation: scaleSpin 10s linear infinite;
  }
  &:nth-child(3) {
    top: 40%;
    left: 40%;
    animation: scaleSpin 3s linear infinite;
  }
  &:nth-child(4) {
    top: 66%;
    left: 30%;
    animation: scaleSpin 7s linear infinite;
  }
  &:nth-child(5) {
    top: 90%;
    left: 10%;
    animation: scaleSpin 9s linear infinite;
  }
  &:nth-child(6) {
    top: 30%;
    left: 60%;
    animation: scaleSpin 5s linear infinite;
  }
  &:nth-child(7) {
    top: 70%;
    left: 20%;
    animation: scaleSpin 8s linear infinite;
  }
  &:nth-child(8) {
    top: 75%;
    left: 60%;
    animation: scaleSpin 10s linear infinite;
  }
  &:nth-child(9) {
    top: 50%;
    left: 50%;
    animation: scaleSpin 6s linear infinite;
  }
  &:nth-child(10) {
    top: 45%;
    left: 26%;
    animation: scaleSpin 10s linear infinite;
  }
  &:nth-child(11) {
    top: 10%;
    left: 74%;
    animation: scaleSpin 9s linear infinite;
  }
  &:nth-child(12) {
    top: 20%;
    left: 70%;
    animation: scaleSpin 7s linear infinite;
  }
  &:nth-child(13) {
    top: 20%;
    left: 95%;
    animation: scaleSpin 8s linear infinite;
  }
  &:nth-child(14) {
    top: 60%;
    left: 5%;
    animation: scaleSpin 6s linear infinite;
  }
  &:nth-child(15) {
    top: 90%;
    left: 90%;
    animation: scaleSpin 9s linear infinite;
  }
  @keyframes scaleSpin {
    0% {
      transform: scale(0) translateY(0) rotate(70deg);
    }
    30% {
      transform: scale(0.2) translateY(0) rotate(70deg);
    }
    99% {
      transform: scale(1.5) translateY(-5vh) rotate(360deg);
    }
    100% {
      transform: scale(1.5) translateY(-5vh) rotate(360deg);
      display: none;
    }
  }
`;

export default Bubbles;
