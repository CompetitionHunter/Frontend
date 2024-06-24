import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import {
  HeartOutlined,
  BellOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

interface SettingData {
  name: string;
  birth: string;
  newChatAlarm: boolean;
  anniversaryAlarm: boolean;
}

type SettingProps = {
  children: React.ReactNode;
};

const Setting: React.FC<SettingProps> = ({ children }) => {
  const [settingData, setSettingData] = useState<SettingData>({
    name: "민경",
    birth: "2000-01-29",
    newChatAlarm: true,
    anniversaryAlarm: false,
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(settingData);
    handleOk();
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(e.target);
    const { name, value, type, checked } = e.target;
    // const { name, value } = e.target;
    setSettingData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const deleteAccount = () => {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      console.log("탈퇴");
    }
  };

  return (
    <>
      <span onClick={showModal}>{children}</span>
      <Modal
        open={open}
        // title="환경설정"
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        width={"27rem"}
      >
        <Container>
          <form onSubmit={submit} onChange={handleChange}>
            <Title>
              <h1>
                <HeartOutlined />
                기본 설정
              </h1>
              <hr />
            </Title>
            <FormItem>
              <h1>이름</h1>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  defaultValue={settingData.name}
                  required
                />
              </div>
            </FormItem>
            <FormItem>
              {/* <CalendarOutlined /> */}
              <h1>생일</h1>
              <div className="input-box">
                <input
                  type="date"
                  name="birth"
                  defaultValue={settingData.birth}
                />
              </div>
            </FormItem>
            <br />
            <Title>
              <h1>
                <BellOutlined />
                알림 설정
              </h1>
              <hr />
            </Title>
            <FormItem>
              <h1>새 채팅</h1>
              {/* <AlarmSwitch defaultChecked={settingData.newChatAlarm} /> */}
              <SwitchContainer>
                <Checkbox
                  type="checkbox"
                  name="newChatAlarm"
                  defaultChecked={settingData.newChatAlarm}
                />
                <Slider />
              </SwitchContainer>
              <h1>기념일</h1> &nbsp;
              {/* <AlarmSwitch defaultChecked={settingData.anniversaryAlarm} /> */}
              <SwitchContainer>
                <Checkbox
                  type="checkbox"
                  name="anniversaryAlarm"
                  defaultChecked={settingData.anniversaryAlarm}
                />
                <Slider />
              </SwitchContainer>
            </FormItem>
            <br />
            <Title>
              <h1>
                <CreditCardOutlined />
                구독 및 결제
              </h1>
              <hr />
            </Title>
            <FormItem>
              <h1>결제 수단 (추가 예정)</h1>
              <input type="text" value="카드" disabled />
            </FormItem>
            <Footer>
              <div onClick={deleteAccount}>회원 탈퇴</div>
              <button type="submit">저장</button>
            </Footer>
          </form>
        </Container>
      </Modal>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  form {
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.div`
  width: 100%;
  h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    span {
      font-size: 1rem;
      margin-right: 0.5rem;
    }
  }
  hr {
    border: 1px solid #f2f2f2;
    width: 100%;
  }
`;
const FormItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  h1 {
    font-weight: 500;
    font-size: 1rem;
    margin-right: 1rem;
  }
  .input-box {
    background-color: #f2f2f2;
    border-radius: 2rem;
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
    font-size: 1rem;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-left: 10%;
  /* margin-top: 2rem; */
  div {
    width: fit-content;
    font-size: 0.8rem;
    color: grey;
    margin-right: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    /* margin-left: 145%; */
    width: 7rem;
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
`;

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  margin-right: 2rem;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 1.5rem;
  /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); */

  &:before {
    position: absolute;
    content: "";
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    height: 1.2rem;
    width: 1.2rem;
    left: 0.15rem;
    bottom: 0.15rem;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #fff200;
  }

  &:checked + ${Slider}:before {
    transform: translateX(1.5rem);
  }
`;

export default Setting;
