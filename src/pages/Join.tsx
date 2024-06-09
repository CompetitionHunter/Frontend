import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MailOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import styled from "styled-components";
import ExampleImg from "../assets/Orichat_Logo.jpeg";
import ExampleImg2 from "../assets/add.png";

const contentStyle: React.CSSProperties = {
  height: "100vh",
  color: "#000",
  textAlign: "center",
  background: "#feff86",
  margin: 0,
};

interface LoginData {
  email: string;
  pw: string;
}

const Join = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    pw: "",
  });

  const submit = () => {
    console.log(loginData);
    navigate("/character-list");
  };
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Intoduce>
        <Carousel autoplay>
          <div>
            <img src={ExampleImg} alt="ex" style={contentStyle} />
          </div>
          <div>
            <img src={ExampleImg2} alt="ex" style={contentStyle} />
          </div>
          <div>
            <img src={ExampleImg} alt="ex" style={contentStyle} />
          </div>
          <div>
            <img src={ExampleImg2} alt="ex" style={contentStyle} />
          </div>
        </Carousel>
      </Intoduce>
      <FormContainer>
        <form onSubmit={submit} onChange={handleChange}>
          <Top>
            <span>OriChat</span>
          </Top>
          <FormItem>
            <MailOutlined />
            <h1>E-Mail</h1>
            <div className="input-box">
              <input type="email" name="email" autoComplete="off" required />
            </div>
          </FormItem>
          <FormItem>
            <CheckSquareOutlined />
            <h1>Password</h1>
            <div className="input-box">
              <input type="password" name="pw" autoComplete="off" required />
            </div>
          </FormItem>
          <Bottom>
            <button type="submit">로그인</button>
          </Bottom>
        </form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Intoduce = styled.div`
  width: 40vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const FormContainer = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: center;
  }
  span {
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 2rem;
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
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 3rem;
    }
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin-top: 2rem;
    width: 6rem;
    height: 2rem;
    border-radius: 1.5rem;
    border: 1px solid #f2f2f2;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #f2f2f2;
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

const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem 0;
  h1 {
    font-weight: 500;
    font-size: 1rem;
    margin-right: 1rem;
  }
  .input-box {
    background-color: #f2f2f2;
    border-radius: 0.5rem;
    padding: 0.3rem;
  }
  input {
    height: 1.5rem;
    font-size: 1rem;
    padding: 0 0.5rem;
    border: 0 solid;
    background: transparent;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  span {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`;

export default Join;
