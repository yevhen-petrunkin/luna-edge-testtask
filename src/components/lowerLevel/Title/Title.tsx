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
            "text-xl base:text-2xl lg:text-3xl xl:text-4xl font-medium ",
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
