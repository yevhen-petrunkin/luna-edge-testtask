import { OptionsT, SelectDataT } from "../../../types";

interface ISelectProps {
  selectData: SelectDataT;
  options: OptionsT;
  changeHandler: (selectOptions: OptionsT) => void;
  className?: string | undefined;
}

export default ISelectProps;
