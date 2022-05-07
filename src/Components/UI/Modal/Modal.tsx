import React, { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";
import css from './Modal.module.css'

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className={css.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        portalElement as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal