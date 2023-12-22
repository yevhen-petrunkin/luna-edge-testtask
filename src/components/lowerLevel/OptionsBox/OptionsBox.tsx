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
        "absolute z-10 bg-secondary-lighter w-[260px] h-[30vh] overflow-hidden",
        {
          hidden: options.length === 0 || !visibility,
        },
        className
      )}
    >
      <ul className="h-full overflow-y-auto">
        {options &&
          options.map((option) => (
            <li key={option.name + option.url}>
              <button
                className="w-full px-4 py-1.5 text-left transition-all outline-none cursor-pointer hover:text-accent-darker hover:bg-accent-light focus:text-accent-dark focus:bg-accent-light"
                type="button"
                onClick={() => {
                  clickHandler(option);
                }}
                tabIndex={0}
              >
                {option.name}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OptionsBox;
