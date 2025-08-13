import React from "react";
import { useState } from "react";
import Modal from "../../src/components/Modal/Modal";
import Form from "../../src/components/Form";

const Learning = () => {
  const [useModal, setUseModal] = useState(false);
  return (
    <>
      <div className="ModalButton">
        <button className="ModalClick" onClick={() => setUseModal(true)}>Show Modal</button>
      </div>
      <Modal isOpen={useModal} onClose={() => setUseModal(false)} title={"Learning"}>
        <Form />
      </Modal>
    </>
  );
};

export default Learning;
