import React, { useState } from "react";
import Nav from "../components/layout/Nav";
import styled from "styled-components";
import {
  HeartOutlined,
  TeamOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

interface SettingData {
  name: string;
  gender: string;
  birth: string;
  subscribed: string[];
}

const Settings = () => {
  // dummy data
  const [settingData, setSettingData] = useState<SettingData>({
    name: "민경",
    gender: "F",
    birth: "2000-01-29",
    subscribed: ["용감한 쿠키", "기상호"],
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(settingData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(e.target);
    // const { name, value, type, checked } = e.target;
    const { name, value } = e.target;
    setSettingData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Nav>
      <Container>
        <form onSubmit={submit} onChange={handleChange}>
          <FormItem>
            <HeartOutlined />
            <h1>이름</h1>
            <input
              type="text"
              name="name"
              placeholder={settingData.name}
              autoComplete="off"
              required
            />
          </FormItem>
          <FormItem>
            <TeamOutlined />
            <h1>성별</h1>
            <input
              type="radio"
              name="gender"
              value="F"
              checked={settingData.gender == "F"}
            />
            <span>여성</span>
            <input
              type="radio"
              name="gender"
              value="M"
              checked={settingData.gender == "M"}
            />
            <span>남성</span>
          </FormItem>
          <FormItem>
            <CalendarOutlined />
            <h1>생일</h1>
            <input type="date" name="birth" defaultValue={settingData.birth} />
          </FormItem>
          <button type="submit">저장</button>
        </form>
      </Container>
    </Nav>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  form {
    width: 55%;
    height: 50%;
    /* border: 1px solid #f2f2f2; */
    /* background-color: #f2f2f2; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #f2f2f2;
    border-radius: 1rem;
    padding: 2rem; */
    button {
      margin-left: auto;
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
        transition: all 0.3s;
        background-color: #fff200;
      }
      &:focus,
      &:active {
        outline: none;
        box-shadow: none;
      }
    }
  }
`;
const FormItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  h1 {
    font-weight: 500;
    font-size: 1rem;
    margin: 1rem;
  }
  input {
    height: 1.5rem;
    font-size: 1rem;
    padding: 0 0.5rem;
    border: 0 solid;
    border-bottom: 1px solid black;
    background: transparent;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  span {
    font-size: 1rem;
  }
`;

export default Settings;
