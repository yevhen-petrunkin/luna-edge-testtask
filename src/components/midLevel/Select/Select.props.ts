import { OptionsT, SelectDataT } from "../../../types";

interface ISelectProps {
  selectData: SelectDataT;
  options: OptionsT;
  changeHandler: (selectOptions: OptionsT) => void;
  isModalOpen?: boolean | undefined;
  className?: string | undefined;
}

export default ISelectProps;
