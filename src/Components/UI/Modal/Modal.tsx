import React, { Fragment, ReactNode, useContext } from "react";
import ReactDOM from "react-dom";
import css from "./Modal.module.css";
import { ModalContext } from "../../../context/ModalContext";

const Backdrop = () => {
  const { closeModal } = useContext(ModalContext);
  return <div className={css.backdrop} onClick={closeModal}></div>;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement as HTMLElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
