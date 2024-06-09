import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../components/layout/Nav";
import gingerBrave from "../assets/ginger.jpeg";
import strawberry from "../assets/straw.jpeg";
import babyShark from "../assets/shark.jpeg";
import conan from "../assets/conan.jpeg";
import { Badge, Input, Col, Row } from "antd";
import CharacterProfile from "../components/Modal/CharacterProfile";
import NewCharacter from "../components/Modal/NewCharacter";

const { Search } = Input;
interface Character {
  id: number;
  name: string;
  image: string;
  title: string;
}

interface CharacterClass {
  title: string;
  characters: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

const CharacterList = () => {
  // dummy data
  const [characterList, setCharacterList] = useState<Array<Character>>([
    {
      id: 0,
      name: "코난",
      image: conan,
      title: "명탐정 코난",
    },
    {
      id: 1,
      name: "용감한 쿠키",
      image: gingerBrave,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 2,
      name: "딸기맛 쿠키",
      image: strawberry,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 3,
      name: "기상호",
      image: babyShark,
      title: "가비지타임",
    },
    {
      id: 4,
      name: "용감한 쿠키",
      image: gingerBrave,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 5,
      name: "딸기맛 쿠키",
      image: strawberry,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 6,
      name: "기상호",
      image: babyShark,
      title: "가비지타임",
    },
    {
      id: 7,
      name: "용감한 쿠키",
      image: gingerBrave,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 8,
      name: "딸기맛 쿠키",
      image: strawberry,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 9,
      name: "기상호",
      image: babyShark,
      title: "가비지타임",
    },
    {
      id: 0,
      name: "코난",
      image: conan,
      title: "명탐정 코난",
    },
    {
      id: 1,
      name: "용감한 쿠키",
      image: gingerBrave,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 2,
      name: "딸기맛 쿠키",
      image: strawberry,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 3,
      name: "기상호",
      image: babyShark,
      title: "가비지타임",
    },
  ]);

  const [characterClass, setCharacterClass] = useState<Array<CharacterClass>>([
    {
      title: "쿠키런: 오븐브레이크",
      characters: [
        {
          id: 1,
          name: "용감한 쿠키",
          image: gingerBrave,
        },
        {
          id: 2,
          name: "딸기맛 쿠키",
          image: strawberry,
        },
        {
          id: 1,
          name: "용감한 쿠키",
          image: gingerBrave,
        },
        {
          id: 2,
          name: "딸기맛 쿠키",
          image: strawberry,
        },
        {
          id: 1,
          name: "용감한 쿠키",
          image: gingerBrave,
        },
        {
          id: 2,
          name: "딸기맛 쿠키",
          image: strawberry,
        },
      ],
    },
    {
      title: "가비지타임",
      characters: [
        {
          id: 3,
          name: "기상호",
          image: babyShark,
        },
      ],
    },
    {
      title: "명탐정 코난",
      characters: [
        {
          id: 0,
          name: "코난",
          image: conan,
          game: "명탐정 코난",
        },
        {
          id: 0,
          name: "코난",
          image: conan,
          game: "명탐정 코난",
        },
        {
          id: 0,
          name: "코난",
          image: conan,
          game: "명탐정 코난",
        },
        {
          id: 0,
          name: "코난",
          image: conan,
          game: "명탐정 코난",
        },
      ],
    },
  ]);

  const [searchedCharacter, setSearchedCharacter] = useState([
    {
      id: 0,
      name: "코난",
      image: conan,
      title: "명탐정 코난",
    },
    {
      id: 1,
      name: "용감한 쿠키",
      image: gingerBrave,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 2,
      name: "딸기맛 쿠키",
      image: strawberry,
      title: "쿠키런: 오븐브레이크",
    },
    {
      id: 3,
      name: "기상호",
      image: babyShark,
      title: "가비지타임",
    },
  ]);

  const searchCharacter = (value: string) => {
    setSearchedCharacter([]);
    setActive("search");
    console.log(value);
  };

  const [active, setActive] = useState("all");

  return (
    <Nav>
      <Container>
        <Top>
          <div>
            <button
              onClick={() => {
                setActive("all");
              }}
              className={active === "all" ? "selected btn" : "btn"}
            >
              모든 캐릭터
            </button>
            <button
              onClick={() => {
                setActive("class");
              }}
              className={active === "class" ? "selected btn" : "btn"}
            >
              작품별 캐릭터
            </button>
          </div>
          <Search
            placeholder="두근두근 나와 대화할 2D 캐릭터는?"
            loading={false}
            onSearch={searchCharacter}
            size="large"
            className="search-bar"
          />
        </Top>
        {active === "all" && (
          <Characters>
            {characterList.map((c, i) => (
              <CharacterProfile>
                <Character>
                  {i < 5 ? (
                    <Badge.Ribbon text="인기!" placement="start" color="pink">
                      <img alt="example" src={c.image} />
                    </Badge.Ribbon>
                  ) : (
                    <img alt="example" src={c.image} />
                  )}

                  <Desc>
                    <h1>{c.name}</h1>
                    <h3>{c.title}</h3>
                  </Desc>
                </Character>
              </CharacterProfile>
            ))}
          </Characters>
        )}
        {active === "class" && (
          <Class>
            {characterClass.map((c) => (
              <div>
                <hr
                  className="hr-text"
                  data-content={"🐣 " + c.title + " 🐣"}
                ></hr>
                <div className="class">
                  {c.characters.map((char) => (
                    <CharacterProfile>
                      <Character>
                        <img alt="example" src={char.image} />
                        <Desc>
                          <h1>{char.name}</h1>
                        </Desc>
                      </Character>
                    </CharacterProfile>
                  ))}
                </div>
              </div>
            ))}
          </Class>
        )}
        {active === "search" &&
          (searchedCharacter.length === 0 ? (
            <NoResContainer>
              <h1>검색 결과가 없습니다 🥲</h1>
              <NewCharacter>
                <button>캐릭터 신청</button>
              </NewCharacter>
            </NoResContainer>
          ) : (
            <Characters>
              <Row gutter={48}>
                {searchedCharacter.map((c, i) => (
                  <Col className="gutter-row" span={6} key={i}>
                    <CharacterProfile>
                      <Character>
                        <img alt="example" src={c.image} />
                        <Desc>
                          <h1>{c.name}</h1>
                          <h3>{c.title}</h3>
                        </Desc>
                      </Character>
                    </CharacterProfile>
                  </Col>
                ))}
              </Row>
            </Characters>
          ))}
      </Container>
    </Nav>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-left: 2rem;
  .search-bar {
    width: 30vw;
    height: 5vh;
    margin-right: 5vw;
  }
  div {
    width: 25vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    width: 12vw;
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
      transition: all 0.3s;
    }
    &:focus,
    &:active {
      outline: none;
      box-shadow: none;
    }
  }
  .selected {
    background-color: #fff200;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
    .search-bar {
      width: 100vw;
      padding: 0 1rem;
      margin-right: 0;
      margin-top: 1rem;
    }
    div {
      width: 100vw;
      margin-top: 1rem;
    }
    .btn {
      width: 50vw;
      border-radius: 0;
    }
  }
`;

const Characters = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-top: 1rem;
  max-height: 80vh;
  padding-left: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  h1 {
    font-size: 1rem;
    font-weight: 500;
  }
  .rank {
    background-color: #fff200;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    span {
      /* color: #fff; */
      font-weight: 800;
      font-size: 1%.5;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: center;
    width: 100vw;
    height: 77vh;
    padding: 0;
    margin-top: 0;
  }
`;

const Character = styled.div`
  display: flex;
  flex-direction: column;
  width: 12vw;
  height: 14vw;
  border-radius: 0.5rem;
  padding: 0.5rem;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
    transition: all 0.3s;
  }
  img {
    width: 12vw;
    height: 10vw;
    object-fit: fill;
    border-radius: 0.5rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 25vw;
    height: 30vw;
    img {
      width: 24vw;
      height: 20vw;
    }
  }
`;

const Class = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  max-height: 80vh;
  padding-left: 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  .hr-text {
    position: relative;
    outline: 0;
    border: 0;
    text-align: center;
    height: 1.5rem;
    &:before {
      content: "";
      /* background: linear-gradient(to right, transparent, #f2f2f2, transparent); */
      background-color: #f2f2f2;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
    }
    &:after {
      content: attr(data-content);
      position: relative;
      display: inline-block;
      color: #000;
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0 0.5em;
      line-height: 1.5rem;
      background-color: #fff;
    }
  }
  .class {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
    height: 77vh;
    padding: 0;
    margin-top: 0;
  }
`;

const Desc = styled.div`
  width: 12vw;
  white-space: nowrap;
  padding: 0.5rem;
  h1 {
    font-size: 1rem;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h3 {
    font-size: 0.8rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 25vw;
    height: 6vw;
  }
`;

const NoResContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 70vw;
  padding-right: 8vw;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: gray;
  }
  button {
    margin-top: 1rem;
    width: 8rem;
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
`;

export default CharacterList;
