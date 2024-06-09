import React, { useCallback } from "react";
import styled from "styled-components";
import URLInput from "./components/Modal/URLInput";

interface Request {
  requestId: number;
  name: string;
  media: string;
  requestUserId: string;
}

const Manage = () => {
  // dummy data
  const requestsList: Request[] = [
    {
      requestId: 0,
      name: "용감한 쿠키",
      media: "쿠키런",
      requestUserId: "ididid",
    },
    { requestId: 1, name: "기상호", media: "가비지타임", requestUserId: "id2" },
    {
      requestId: 2,
      name: "딸기맛 쿠키",
      media: "쿠키런",
      requestUserId: "id3",
    },
  ];

  const reject = useCallback((requestID: number) => {
    console.log("거절", requestID);
  }, []);

  return (
    <Container>
      <h3>관리 페이지의 디자인 개선을 원한다면 문의 주세요</h3>
      <h2>요청 목록</h2>
      {requestsList.map((r) => (
        <Request key={r.requestId}>
          <span>{r.requestId}</span>
          <span key={r.name}>이름: {r.name}</span>
          <span key={r.media}>등장 작품: {r.media}</span>
          <span key={r.requestUserId}>요청한 유저 ID: {r.requestUserId}</span>
          <URLInput requestId={r.requestId}>
            <button>수락</button>
          </URLInput>
          <button onClick={() => reject(r.requestId)}>거절</button>
        </Request>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  h3 {
    color: red;
  }
`;

const Request = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border-bottom: 1px solid black;
`;

export default Manage;
