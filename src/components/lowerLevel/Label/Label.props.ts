import { RegisterOptions } from "react-hook-form";

interface ILabelProps {
  id: string;
  text: string;
  required?: RegisterOptions | boolean;
  className?: string | undefined;
}

export default ILabelProps;
