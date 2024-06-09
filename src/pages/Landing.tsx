import React, { useRef } from "react";
import Logo from "../assets/Orichat_Logo.jpeg";
import styled from "styled-components";
import Join from "./Join";

const Landing = () => {
  const joinRef = useRef<HTMLDivElement>(null);
  const scrollToJoin = () => {
    if (joinRef.current) {
      joinRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Container>
        <img src={Logo} className="logo" alt="OriChat logo" />
        <h1>OriChat</h1>
        <div className="desc">
          <p className="desc_text">2D 최애와 친구되기</p>
          <button onClick={scrollToJoin}>시작</button>
        </div>
      </Container>
      <div ref={joinRef}>
        <Join />
      </div>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .logo {
    height: 40vh;
    width: 40vh;
    /* padding: 1.5em; */
    border-radius: 50%;
    animation: logo-spin infinite 20s linear;
  }

  h1 {
    font-size: 2em;
    /* color: #2cd3e1; */
    /* color: #0079ff; */
  }

  .desc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;

    .desc_text {
      margin-right: 1em;
    }

    button {
      width: 5rem;
      height: 2.5rem;
      border-radius: 1.5rem;
      border: 1px solid #f2f2f2;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      &:hover {
        transform: scale(1.05);
        background-color: #fff200;
        transition: all 0.3s;
      }
      &:focus,
      &:active {
        outline: none;
        box-shadow: none;
      }
    }
  }
`;

export default Landing;
