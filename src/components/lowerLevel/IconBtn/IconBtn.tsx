import cn from "classnames";

import { selectIconForIconBtn } from "../../../utils/helpers";

import IIconBtnProps from "./IconBtn.props";

const IconBtn: React.FC<IIconBtnProps> = ({
  variant,
  clickHandler,
  className,
}) => {
  const { ref, use, label } = selectIconForIconBtn(variant);
  const Icon = ref;

  return (
    <button
      className={cn(
        "flex items-center justify-center outline-none hover:text-primary-dark focus:text-primary-dark transition-colors",
        {
          "w-4 h-4": variant !== "close-badge" && variant !== "close-modal",
          "w-3.5 h-3.5 text-primary-mid": variant === "close-badge",
          "w-8 h-8": variant === "close-modal",
        },
        className
      )}
      type="button"
      aria-label={use}
      onClick={clickHandler}
    >
      <Icon
        className={cn("text-current", {
          "w-full h-full": variant !== "close-modal",

          "w-7 h-7": variant === "close-modal",
        })}
        aria-label={label}
      >
        IconBtn
      </Icon>
    </button>
  );
};

export default IconBtn;
