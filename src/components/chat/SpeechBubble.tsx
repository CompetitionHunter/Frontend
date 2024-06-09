import React from "react";
import styled from "styled-components";

interface SpeechBubbleProps {
  type: string;
  message: string;
  time: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ type, message, time }) => {
  return (
    <Container>
      {type === "user" && <span>{time}</span>}
      <Chat $type={type}>{message}</Chat>
      {type === "character" && <span>{time}</span>}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: flex-end;
  span {
    font-size: 0.6rem;
    color: #666;
    margin: 0.3rem;
  }
`;
const Chat = styled.div<{ $type: string }>`
  display: flex;
  flex-shrink: none;
  justify-content: ${({ $type }) =>
    $type === "user" ? "flex-end" : "flex-start"};
  align-items: center;
  width: fit-content;
  max-width: 40vw;
  overflow-wrap: break-word;
  /* height: 5vh; */
  padding: 0.5rem;
  margin: 0.3rem;
  /* border-radius: 0 1rem 1rem 1rem; */
  border-radius: ${({ $type }) =>
    $type === "user" ? "1rem 0 1rem 1rem;" : "0 1rem 1rem 1rem"};
  background-color: ${({ $type }) => ($type === "user" ? "#fff200" : "#fff")};
  border: ${({ $type }) =>
    $type === "user" ? "1px solid #fff200" : "1px solid #f2f2f2"};
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 1px;
`;

export default SpeechBubble;
