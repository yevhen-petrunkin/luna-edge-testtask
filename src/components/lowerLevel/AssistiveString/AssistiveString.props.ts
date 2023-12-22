import { FieldError, FieldErrors } from "react-hook-form";
import { InputErrorT } from "../../../types";

interface IAssistiveStringProps {
  text: string;
  error?: FieldError | FieldErrors<any> | null | InputErrorT | undefined;
  className?: string | undefined;
}

export default IAssistiveStringProps;
