import cn from "classnames";

import { StarIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

import IButtonProps from "./Button.props";

const Button: React.FC<IButtonProps> = ({
  text,
  type = "button",
  variant = "primary",
  size = "base",
  decorated = false,
  disabled = false,
  clickHandler,
  className,
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-1 px-3 py-1 rounded text-base font-medium transition-all outline-none",
        {
          "text-secondary-lighter bg-accent-dark hover:bg-accent-darker focus:bg-accent-darker  active:bg-accent-darker disabled:text-accent-lighter disabled:bg-accent-light focus-visible:ring-accent-dark focus-visible:ring-2":
            variant === "primary",

          "text-primary bg-transparent hover:text-accent-darker hover:bg-accent-light focus:text-accent-dark focus:bg-transparent  active:text-accent-darker active:bg-accent-light disabled:text-accent-lighter disabled:bg-transparent focus-visible:ring-accent-dark focus-visible:ring-2":
            variant === "text",
          "gap-2 px-4 py-2 text-2xl": size === "lg",
        },
        className
      )}
      type={type}
      onClick={clickHandler}
      disabled={disabled}
    >
      {decorated ? (
        <StarIcon
          className={cn("w-5 h-5 text-current", {
            "w-6 h-6": size === "lg",
          })}
        />
      ) : (
        ""
      )}
      {text}
      {decorated ? (
        <ChevronDownIcon
          className={cn("w-5 h-5 text-current", {
            "w-6 h-6": size === "lg",
          })}
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
