import cn from "classnames";

import { InformationCircleIcon } from "@heroicons/react/16/solid";

import ILabelProps from "./Label.props";

const Label: React.FC<ILabelProps> = ({
  id,
  text,
  required = false,
  className,
}) => {
  return (
    <label
      className={cn("flex items-center justify-between", className)}
      htmlFor={id}
    >
      <span className="flex items-center gap-1 font-medium cursor-pointer">
        {text} <InformationCircleIcon className="w-4 h-4" />
      </span>
      <span className="text-primary-darker">
        {required ? "Required" : "Optional"}
      </span>
    </label>
  );
};

export default Label;
