import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import profile from "../../assets/gingerBrave.webp";

type ProfileProps = {
  children: React.ReactNode;
};

const CharacterProfile: React.FC<ProfileProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // setTimeout(() => {
    setOpen(false);
    // }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button onClick={showModal}>open</Button> */}
      <span onClick={showModal}>{children}</span>
      <MyModal
        open={open}
        title="용감한 쿠키"
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        // width={"25vw"}
      >
        <Contents>
          <img src={profile} alt="profile" />
          <Desc>
            <div>
              <h1>생일</h1> <span>2020.04.08</span>
            </div>
            <div>
              <h1>등장작품</h1> <span>쿠키런: 오븐브레이크</span>
            </div>
          </Desc>
        </Contents>
        <Footer>
          <Button key="submit" onClick={handleOk}>
            채팅 시작하기
          </Button>
        </Footer>
      </MyModal>
    </>
  );
};

const MyModal = styled(Modal)`
  width: 25vw;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
    height: 100vh;
  }
  /* .ant-modal-content {
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
  .ant-modal-header {
    border-bottom: none;
    padding: 1rem 1.5rem;
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .ant-modal-body {
    padding: 1rem 1.5rem;
  }
  .ant-modal-footer {
    border-top: none;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
  } */
`;

const Button = styled.button`
  width: 90%;
  margin-top: 1rem;
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
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #f2f2f2;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  div {
    width: 110%;
    margin-left: -10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 1rem;
    font-weight: 600;
  }
  span {
    /* margin: 0.5rem; */
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export default CharacterProfile;
