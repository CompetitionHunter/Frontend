import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Nav from "../components/layout/Nav";
import SpeechBubble from "../components/chat/SpeechBubble";
import { Input, Button } from "antd";
import Icon, { SendOutlined, LogoutOutlined } from "@ant-design/icons";
import CharacterProfile from "../components/Modal/CharacterProfile";
import type { GetProps } from "antd";
import profile from "../assets/gingerBraveProfile.jpeg";

type CustomIconComponentProps = GetProps<typeof Icon>;

const { TextArea } = Input;
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const HeartIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={HeartSvg} {...props} />
);

const Chat = () => {
  // dummy data
  const chatList = [
    {
      speaker: "user",
      name: "민경",
      log: [{ message: "안녕!", time: "오후 2:00" }],
    },
    {
      speaker: "character",
      name: "용감한 쿠키",
      log: [
        { message: "안녕하세요!", time: "오후 2:01" },
        { message: "지금 뭐해요?", time: "오후 2:01" },
      ],
    },
    {
      speaker: "user",
      name: "민경",
      log: [
        {
          message:
            "나 점심 메뉴 고민중이야 나 점심 메뉴 고민중이야나 점심 메뉴 고민중이야나 점심 메뉴 고민중이야나 점심 메뉴 고민중이야나 점심 메뉴 고민중이야",
          time: "오후 2:03",
        },
        { message: "점심 먹었어?", time: "오후 2:03" },
      ],
    },
    {
      speaker: "character",
      name: "용감한 쿠키",
      log: [
        {
          message: "네. 딸기맛 쿠키랑 곰젤리 버거 먹었어요!",
          time: "오후 2:04",
        },
      ],
    },
    {
      speaker: "user",
      name: "민경",
      log: [{ message: "말 편하게 해", time: "오후 2:07" }],
    },
    {
      speaker: "character",
      name: "용감한 쿠키",
      log: [
        {
          message: "그래 친구야!",
          time: "오후 2:07",
        },
      ],
    },
    {
      speaker: "user",
      name: "민경",
      log: [{ message: "거기 날씨는 어때?", time: "오후 2:08" }],
    },
    {
      speaker: "character",
      name: "용감한 쿠키",
      log: [
        {
          message: "쿠키 왕국은 항상 화창해!",
          time: "오후 2:08",
        },
        {
          message: "(다크초코 왕국만 빼고)",
          time: "오후 2:08",
        },
      ],
    },
    {
      speaker: "user",
      name: "민경",
      log: [{ message: "거기 날씨는 어때?", time: "오후 2:08" }],
    },
    {
      speaker: "character",
      name: "용감한 쿠키",
      log: [
        {
          message: "쿠키 왕국은 항상 화창해!",
          time: "오후 2:08",
        },
        {
          message: "(다크초코 왕국만 빼고)",
          time: "오후 2:08",
        },
      ],
    },
    {
      speaker: "user",
      name: "민경",
      log: [{ message: "거기 날씨는 어때?", time: "오후 2:08" }],
    },
    {
      speaker: "character",
      name: "용감한 쿠키",
      log: [
        {
          message: "쿠키 왕국은 항상 화창해!",
          time: "오후 2:08",
        },
        {
          message: "(다크초코 왕국만 빼고)",
          time: "오후 2:08",
        },
      ],
    },
  ];
  const dDay = 100;
  const profileImg = profile;

  const [newChat, setNewChat] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewChat(e.target.value);
  };

  const postNewChat = () => {
    console.log(newChat);
  };

  const exitChat = () => {
    if (
      window.confirm(
        "채팅을 종료하시겠습니까?\n지금까지 나눴던 대화, 기념일이 모두 초기화됩니다."
      )
    )
      console.log("exit");
  };

  return (
    <Nav>
      <Container>
        <Top>
          <HeartIcon style={{ color: "hotpink" }} />
          <h1>함께한 지 {dDay}일째</h1>
        </Top>
        {chatList.map((chat, index) => (
          <MessageContainer key={index} $speaker={chat.speaker}>
            {chat.speaker === "character" && (
              <CharacterProfile>
                <p>
                  <img src={profileImg} alt="profile" />
                  <span>{chat.name}</span>
                </p>
              </CharacterProfile>
            )}
            {chat.log.map((c, index) => (
              <SpeechBubble
                key={index}
                type={chat.speaker}
                message={c.message}
                time={c.time}
              />
            ))}
          </MessageContainer>
        ))}
      </Container>
      <New>
        <TextArea
          placeholder="new chat"
          maxLength={300}
          showCount
          allowClear
          onChange={(e) => onChange(e)}
        />
        <Button
          icon={<SendOutlined />}
          onClick={postNewChat}
          className="send"
        />
        <Button icon={<LogoutOutlined />} onClick={exitChat} className="exit" />
      </New>
    </Nav>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  max-height: 80vh;
  height: 80vh;
  overflow-y: auto;
  justify-content: flex-start;
  margin-left: 2vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 97%;
    max-height: 90vh;
    height: 85.5vh;
  }
`;

const Top = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: center;
    padding-top: 1.8rem;
  }
  h1 {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #666;
    font-weight: 500;
    @media ${({ theme }) => theme.device.mobile} {
      line-height: 1.2rem;
    }
  }
`;

const MessageContainer = styled.div<{ $speaker: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $speaker }) =>
    $speaker === "user" ? "flex-end" : "flex-start"};
  margin-right: 1vw;

  p {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
      margin-left: 0.5rem;
      border-radius: 50%;
    }
    span {
      font-size: 0.9rem;
      font-weight: 600;
      color: #666;
    }
    &:hover {
      transform: scale(1.05);
      transition: all 0.3s;
    }
  }
`;

const New = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  padding-top: 1vh;
  margin-left: 2vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 97%;
  }
  .ant-input-outlined {
    height: 8vh;
    border-radius: 1rem 0 0 1rem;
    @media ${({ theme }) => theme.device.mobile} {
      height: 5vh;
    }
  }
  textarea {
    resize: none;
  }
  .send {
    width: 2rem;
    height: 8vh;
    border-radius: 0 1rem 1rem 0;
    background-color: #f2f2f2;
    margin-right: 1vw;
    @media ${({ theme }) => theme.device.mobile} {
      height: 5vh;
    }
  }
  .exit {
    width: 2rem;
    height: 8vh;
    border-radius: 0.5rem;
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
    @media ${({ theme }) => theme.device.mobile} {
      display: none;
    }
    span {
      font-size: 2rem;
    }
    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      border: none;
      outline: none;
    }
  }
`;

export default Chat;
