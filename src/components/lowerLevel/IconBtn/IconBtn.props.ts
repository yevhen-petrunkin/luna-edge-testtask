import { IconBtnVariant } from "../../../types";

interface IIconBtnProps {
  variant: IconBtnVariant;
  clickHandler: () => void;
  className?: string | undefined;
}

export default IIconBtnProps;
