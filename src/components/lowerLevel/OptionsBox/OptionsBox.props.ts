import { Options, Option } from "../../../types";

interface IOptionsBoxProps {
  options: Options;
  visibility?: boolean | undefined;
  clickHandler: (option: Option) => void;
  className?: string | undefined;
}

export default IOptionsBoxProps;
