import cn from "classnames";

import modal from "../../../data/modal.json";
import { Button } from "../..";
import IButtonBaseProps from "./ButtonBase.props";

const ButtonBase: React.FC<IButtonBaseProps> = ({
  clickHandler,
  className,
}) => {
  const { cancel, save } = modal.buttons;

  return (
    <div
      className={cn("inline-flex items-center justify-center gap-3", className)}
    >
      <Button
        text={cancel.text}
        variant="text"
        clickHandler={() => clickHandler(false)}
      />
      <Button text={save.text} clickHandler={() => clickHandler(true)} />
    </div>
  );
};

export default ButtonBase;
