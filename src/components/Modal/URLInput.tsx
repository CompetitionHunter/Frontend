import React, { useState, useCallback } from "react";
import { Modal } from "antd";

type URLInputProps = {
  children: React.ReactNode;
  requestId: number;
};

const URLInput: React.FC<URLInputProps> = ({ children, requestId }) => {
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
  const accept = useCallback((requestID: number) => {
    console.log("수락", requestID);
    handleOk();
  }, []);

  return (
    <>
      <span onClick={showModal}>{children}</span>
      <Modal
        open={open}
        title="나무위키 URL 입력"
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        width={"20rem"}
      >
        <input type="text" placeholder="enter url" required />
        <button onClick={() => accept(requestId)}>확인</button>
      </Modal>
    </>
  );
};

export default URLInput;
