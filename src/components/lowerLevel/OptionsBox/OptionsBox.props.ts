import { OptionsT, OptionT } from "../../../types";

interface IOptionsBoxProps {
  options: OptionsT;
  visibility?: boolean | undefined;
  clickHandler: (option: OptionT) => void;
  className?: string | undefined;
}

export default IOptionsBoxProps;
