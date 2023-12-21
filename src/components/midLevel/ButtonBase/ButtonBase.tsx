import cn from "classnames";
import toast, { Toaster } from "react-hot-toast";

import { useCallback } from "react";

import data from "../../../data/modal.json";

import { Button } from "../..";
import IButtonBaseProps from "./ButtonBase.props";

const ButtonBase: React.FC<IButtonBaseProps> = ({
  clickHandler,
  className,
}) => {
  const { cancel, save } = data.buttons;

  const handleClick = useCallback(
    (needSave?: boolean) => {
      const notify = () => {
        needSave ? toast.success(save.message) : toast.error(cancel.message);
      };

      notify();
      clickHandler();
    },
    [toast, cancel, save]
  );

  return (
    <div
      className={cn("inline-flex items-center justify-center gap-3", className)}
    >
      <Button
        text={cancel.text}
        variant="text"
        clickHandler={() => handleClick()}
      />
      <Button text={save.text} clickHandler={() => handleClick(true)} />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default ButtonBase;
