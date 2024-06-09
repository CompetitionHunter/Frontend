import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {
  HeartOutlined,
  CommentOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/Orichat_Logo_BgRemoved.png";
import Setting from "../Modal/Setting";

import { useRecoilState } from "recoil";
import { selectedMenuState, selectedChatState } from "../../store/globalStore";

import conan from "../../assets/conan.jpeg";
import gingerbrave from "../../assets/gingerBraveProfile.jpeg";
import strawberry from "../../assets/strawberry.webp";
import babyshark from "../../assets/babyShark.webp";

type NavProps = {
  children: React.ReactNode;
};

const Nav: React.FC<NavProps> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(selectedMenuState);
  const [selectedChat, setSelectedChat] = useRecoilState(selectedChatState);

  // dummy data
  const chatList = [
    {
      id: 1,
      name: "용감한 쿠키",
      count: 1,
      profileImg: gingerbrave,
    },
    {
      id: 2,
      name: "기상호",
      count: 0,
      profileImg: babyshark,
    },
    {
      id: 3,
      name: "강지형",
      count: 1,
      profileImg: babyshark,
    },
    {
      id: 4,
      name: "팬케이크",
      count: 3,
      profileImg: strawberry,
    },
    {
      id: 5,
      name: "근육맛 쿠키",
      count: 0,
      profileImg: gingerbrave,
    },
    {
      id: 6,
      name: "코난",
      count: 0,
      profileImg: conan,
    },
    {
      id: 7,
      name: "장미",
      count: 0,
      profileImg: conan,
    },
    {
      id: 8,
      name: "김민경",
      count: 0,
      profileImg: gingerbrave,
    },
    {
      id: 9,
      name: "최영해",
      count: 0,
      profileImg: strawberry,
    },
    {
      id: 10,
      name: "토끼",
      count: 0,
      profileImg: strawberry,
    },
    {
      id: 11,
      name: "거북이",
      count: 0,
      profileImg: strawberry,
    },
    {
      id: 12,
      name: "예언자맛 쿠키",
      count: 0,
      profileImg: strawberry,
    },
  ];
  const totalChatCount = 17;

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  const selectItem = useCallback(
    (selected: string) => {
      setSelectedMenu(selected);
    },
    [setSelectedMenu]
  );

  const selectSubItem = useCallback(
    (index: number) => {
      setSelectedChat(index);
    },
    [setSelectedChat]
  );

  const logout = useCallback(() => {
    // localStorage.removeItem("token");
    // window.location.href = "/";
    console.log("logout");
  }, []);

  return (
    <Container>
      <NavBar>
        <ItemList>
          <Top>
            <img src={Logo} alt="logo" />
            <span>OriChat</span>
          </Top>
          <Link to="/character-list">
            <Item
              className={selectedMenu === "character" ? "selected" : ""}
              onClick={() => {
                selectItem("character");
              }}
            >
              <HeartOutlined />
              <span className="text">캐릭터</span>
            </Item>
          </Link>
          <Item
            className={selectedMenu === "chat" ? "selected continue" : ""}
            onClick={() => {
              if (selectedMenu === "chat") {
                selectItem("");
              } else {
                selectItem("chat");
              }
            }}
          >
            <CommentOutlined />
            <span className="text">내 채팅</span>
            <Badge count={totalChatCount} className="total" />
            <div>
              {selectedMenu === "chat" ? <UpOutlined /> : <DownOutlined />}
            </div>
          </Item>
          {selectedMenu === "chat" && (
            <ChatContainer>
              {chatList.map((chat) => (
                <Link to="/chat">
                  <SubItem
                    key={chat.id}
                    onClick={() => {
                      selectSubItem(chat.id);
                    }}
                    className={selectedChat === chat.id ? "selected sub" : ""}
                  >
                    <Badge count={chat.count}>
                      <Img src={chat.profileImg} />
                    </Badge>
                    {chat.name}
                  </SubItem>
                </Link>
              ))}
            </ChatContainer>
          )}
        </ItemList>
        <ItemList>
          <Setting>
            <Item
              className={selectedMenu === "setting" ? "selected" : ""}
              onClick={() => {
                selectItem("setting");
              }}
            >
              <SettingOutlined />
              <span className="text">환경설정</span>
            </Item>
          </Setting>
          {/* </Link> */}
          <Item onClick={logout}>
            <LogoutOutlined />
            <span className="text">로그아웃</span>
          </Item>
        </ItemList>
      </NavBar>
      <Content>
        {loading ? (
          <Loading>
            <div className="loader">
              <h1>OriChat</h1>
            </div>
          </Loading>
        ) : (
          <>{children}</>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    top: 0;
    left: 0;
  }
  .fold_icon {
    display: none;
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    font-size: 1.5rem;
    @media ${({ theme }) => theme.device.mobile} {
      display: block;
      z-index: 100;
    }
  }
`;
const Content = styled.div`
  height: 90vh;
  width: 80vw;
  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80vh;
  }
`;

// const NavBar = styled.div<NavBarProps>`
const NavBar = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  width: 14rem;
  height: 90vh;
  margin: 5vh 1vw;
  border-radius: 1rem;
  border: 0 0 1px 1px solid #e0e0e0;
  a {
    color: #000;
    text-decoration: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: row;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1rem;
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 8vh;
    border-radius: 0;
    box-shadow: none;
    margin: 0;
    background-color: #fff;
    border-top: 1px solid #e0e0e0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  margin: 0.5rem 0 0.5rem 4vw;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
  span {
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 0.2rem;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #303481 29%,
      #8b93ff 67%,
      #fff200 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 3s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem;
  .selected {
    background-color: #f9f9f9;
    box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1rem;
  }
  .continue {
    border-radius: 1rem 1rem 0 0;
    margin-bottom: 0;
    &:hover {
      transform: none;
    }
  }
  .sub {
    background-color: #fff200;
    box-shadow: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 50vw;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0;
    .selected {
      background-color: #fff;
      box-shadow: none;
      margin: 0;
    }
    .sub {
      background-color: #fff200;
    }
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: #f2f2f2;
  border-radius: 1.5rem;
  font-weight: 600;
  margin: 0.5rem 0;
  padding: 0 1rem;
  div {
    margin-left: auto;
    svg {
      margin-right: 0;
    }
  }
  svg {
    margin-right: 1rem;
  }
  &:hover {
    background-color: #f9f9f9;
    transform: scale(1.05);
    transition: all 0.3s;
  }
  .total {
    margin-left: 0.6rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 20vw;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    background-color: #fff;
    border-radius: 0;
    padding: 0;
    &:hover {
      transform: none;
      background-color: #fff;
    }
    .total {
      margin-left: -0.5rem;
      margin-bottom: 1rem;
    }
    div {
      display: none;
    }
    svg {
      margin-right: 0;
    }
    .text {
      display: none;
    }
  }
`;

const Img = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.2rem;
  border-radius: 50%;
`;

const ChatContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 12rem;
  border-radius: 0 0 1rem 1rem;
  max-height: 38vh;
  overflow: hidden auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    border: 0.1rem solid #f2f2f2;
    position: absolute;
    z-index: 1;
    left: 0;
    top: -100vh;
    width: 100vw;
    height: 95vh;
    /* bottom: 8vh;
    width: 29vw;
    max-height: 80vh;
    margin: 1vw; */
    max-height: 95vh;
    background-color: #fff;
    padding-top: 2vh;
    border-radius: 1rem;
  }
`;

const SubItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 14rem;
  flex-shrink: 0;
  height: 2.5rem;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 0;
  font-size: 1rem;
  &:hover {
    background-color: #fff200;
    transition: all 0.3s;
  }
  .ant-badge {
    margin-right: 0.5rem;
    margin-left: 1.7rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    /* width: 27vw; */
    padding: 1rem;
    width: 100vw;
    border-bottom: none;
    background-color: #fff;
    .ant-badge {
      margin-left: 0.5rem;
    }
  }
`;

const Loading = styled.div`
  width: 78vw;
  height: 90vh;
  border-radius: 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 60%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media ${({ theme }) => theme.device.mobile} {
      left: 50%;
    }
  }

  .loader h1 {
    margin: 0;
    padding: 0;
    /* text-transform: uppercase; */
    font-size: 10rem;
    color: rgb(214, 230, 242, 0.7);
    background-image: url(https://image.ibb.co/ciSeac/image.png);
    background-repeat: repeat-x;
    -webkit-background-clip: text;
    animation: animate 5s linear infinite;
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 5rem;
    }
  }

  @keyframes animate {
    0% {
      background-position: left 0px top 80px;
    }
    40% {
      background-position: left 800px top -50px;
    }
    80% {
      background-position: left 1800px top -50px;
    }
    100% {
      background-position: left 2400px top 80px;
    }
  }
`;

export default Nav;
