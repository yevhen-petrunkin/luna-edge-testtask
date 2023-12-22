import cn from "classnames";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { IconBtn } from "../..";

import IModalProps from "./Modal.props";

const Modal: React.FC<IModalProps> = ({ children, clickHandler }) => {
  const modal = document.querySelector("#modal-root");

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (e.code === "Escape") {
        clickHandler();
      }
    };
    window.addEventListener("keydown", handleKeydown);
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-20 h-[100vh] bg-primary/40"
      onClick={clickHandler}
    >
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[80vh] px-2 py-6 base:px-4 xl:px-8 xl:py-10 rounded-lg border bg-secondary overflow-hidden">
        <IconBtn
          variant="close-modal"
          clickHandler={clickHandler}
          className="absolute top-2 right-2"
        />

        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>,
    modal!
  );
};

export default Modal;
