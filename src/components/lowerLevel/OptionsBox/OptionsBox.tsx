import cn from "classnames";

import IOptionsBoxProps from "./OptionsBox.props";

const OptionsBox: React.FC<IOptionsBoxProps> = ({
  options,
  visibility = false,
  clickHandler,
  className,
}) => {
  return (
    <div
      className={cn(
        "absolute w-[260px] h-[30vh] overflow-hidden",
        {
          hidden: options.length === 0 || !visibility,
        },
        className
      )}
    >
      <ul className="h-full overflow-y-auto">
        {options &&
          options.map((option, idx) => (
            <li
              key={option.name + idx}
              className="px-4 py-1.5 transition-all outline-none cursor-pointer hover:text-accent-darker hover:bg-accent-light focus:text-accent-dark focus:bg-accent-light  "
              onClick={() => {
                clickHandler(option);
                console.log(option);
              }}
              tabIndex={0}
            >
              {option.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OptionsBox;
