import cn from "classnames";

import IAssistiveStringProps from "./AssistiveString.props";

const AssistiveString: React.FC<IAssistiveStringProps> = ({
  text,
  error,
  className,
}) => {
  return (
    <span
      className={cn(
        {
          "text-primary-darker": !error,
          "text-error-lighter": error,
        },
        className
      )}
    >
      {error ? error?.message?.toString() : text}
    </span>
  );
};

export default AssistiveString;
