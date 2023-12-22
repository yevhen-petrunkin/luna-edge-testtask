import { OptionsT } from "../../../types";

interface ISelectProps {
  options: OptionsT;
  changeHandler: (selectOptions: OptionsT) => void;
  className?: string | undefined;
}

export default ISelectProps;
