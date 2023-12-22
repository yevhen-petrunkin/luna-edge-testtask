import cn from "classnames";

import ITitleProps from "./Title.props";

const Title: React.FC<ITitleProps> = ({ text, variant = "h2", className }) => {
  return (
    <>
      {variant === "h1" ? (
        <h1
          className={cn(
            "text-2xl base:text-3xl lg:text-4xl xl:text-5xl font-medium",
            className
          )}
        >
          {text}
        </h1>
      ) : (
        ""
      )}

      {variant === "h2" ? (
        <h2
          className={cn(
            "text-lg base:text-xl lg:text-2xl xl:text-3xl font-medium",
            className
          )}
        >
          {text}
        </h2>
      ) : (
        ""
      )}
    </>
  );
};

export default Title;
