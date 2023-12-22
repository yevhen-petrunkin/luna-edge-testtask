import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { InputT } from "../../../types";

interface IInputProps {
  input: InputT;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  className?: string | undefined;
}

export default IInputProps;
