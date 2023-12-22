import cn from "classnames";

import { EyeIcon, UserIcon } from "@heroicons/react/16/solid";

import { Label, AssistiveString } from "../..";

import IInputProps from "./Input.props";

export const Input: React.FC<IInputProps> = ({
  input,
  register,
  errors,
  className,
}) => {
  const { label, placeholder, type, name, assistiveText, options } = input;

  if (options?.pattern) {
    options.pattern.value = new RegExp(options.pattern.value);
  }

  const hasError = errors ? errors[name] : null;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label id={name} text={label} required={options.required} />

      <span className="relative">
        <input
          id={name}
          className={`input-behavior ${hasError && "input-error"}`}
          type={type ? type : "text"}
          placeholder={placeholder}
          {...register(name, options)}
          autoComplete="off"
        />

        <UserIcon
          className={cn(
            "absolute top-[50%] left-4 -translate-y-[50%] w-7 h-6",
            { "text-primary-darker": !hasError, "text-error-lighter": hasError }
          )}
        />

        <EyeIcon className="absolute top-[50%] right-4 -translate-y-[50%] w-7 h-6 text-primary-darker" />
      </span>

      <AssistiveString text={assistiveText} error={hasError} />
    </div>
  );
};

export default Input;
