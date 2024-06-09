import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";

type NewProps = {
  children: React.ReactNode;
};

interface NewData {
  name: string;
  media: string;
}

const NewCharacter: React.FC<NewProps> = ({ children }) => {
  const [newData, setNewData] = useState<NewData>({
    name: "",
    media: "",
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      window.confirm(
        "신청하신 캐릭터는 관리자의 검토 후 캐릭터 리스트에 추가됩니다. \n신청하시겠습니까?"
      )
    ) {
      console.log(newData);
      handleOk();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setNewData((prev) => ({
      ...prev,
      [name]: value,
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

  return (
    <>
      <span onClick={showModal}>{children}</span>
      <Modal
        open={open}
        title="캐릭터 신청"
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        width={"25rem"}
      >
        <Container>
          <form onSubmit={submit} onChange={handleChange}>
            <FormItem>
              <h1>이름</h1>
              <div className="input-box">
                <input type="text" name="name" autoComplete="off" required />
              </div>
            </FormItem>
            <FormItem>
              <h1>등장 작품</h1>
              <div className="input-box">
                <input type="text" name="media" />
              </div>
            </FormItem>
            <Footer>
              <button type="submit">신청</button>
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

const FormItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  h1 {
    width: 5rem;
    font-weight: 500;
    font-size: 1rem;
    margin-right: 1rem;
  }
  .input-box {
    width: 13rem;
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
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  button {
    margin-top: 1.5rem;
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    border: 1px solid #f2f2f2;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #fff200;
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
`;

export default NewCharacter;
