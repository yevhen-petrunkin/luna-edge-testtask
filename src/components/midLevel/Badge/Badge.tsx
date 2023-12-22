import cn from "classnames";

import { IconBtn } from "../..";

import IBadgeProps from "./Badge.props";

const Badge: React.FC<IBadgeProps> = ({ text, clickHandler, className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-2.5 py-0.5 gap-2.5 rounded-2xl text-sm font-medium bg-secondary-darker",
        className
      )}
    >
      {text}
      <IconBtn variant="close-badge" clickHandler={() => clickHandler(text)} />
    </div>
  );
};

export default Badge;
