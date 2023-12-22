import { IconBtnVariantT } from "../../../types";

interface IIconBtnProps {
  variant: IconBtnVariantT;
  clickHandler: () => void;
  className?: string | undefined;
}

export default IIconBtnProps;
