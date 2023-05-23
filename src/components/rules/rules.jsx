import React, { useState } from "react";
import {
  Backdrop,
  Button,
  Container,
  Header,
  ModalBody,
  Title,
  Close,
  Close2,
  CloseWraper,
} from "./rules.styled";
import { ReactComponent as RulesPic } from "../../images/image-rules-bonus.svg";

function Rules() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  return (
    <Container>
      <Button onClick={handleModal}>rules</Button>

      {modal && (
        <>
          <Backdrop onClick={handleModal} />
          <Modal handleModal={handleModal} />
        </>
      )}
    </Container>
  );
}

function Modal({ handleModal }) {
  return (
    <ModalBody>
      <Header>
        <Title>rules</Title>
        <Close onClick={handleModal} />
      </Header>
      <RulesPic />
      <CloseWraper>
        <Close2 onClick={handleModal} />
      </CloseWraper>
    </ModalBody>
  );
}

export default Rules;
