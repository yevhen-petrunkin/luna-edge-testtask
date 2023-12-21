import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";

import data from "../../data/icon-btns.json";

import { IconBtnVariant, IconData } from "../../types";

function selectIconForIconBtn(variant: IconBtnVariant): IconData {
  let ref = null;
  let use = "Button";
  let label = "Icon";
  const { closeBadge, closeAll, closeModal, fold, unfold } = data;

  switch (variant) {
    case "close-badge":
      ref = XMarkIcon;
      use = closeBadge.function + " " + use;
      label = closeBadge.label + " " + label;
      break;

    case "close-all":
      ref = XMarkIcon;
      use = closeAll.function + " " + use;
      label = closeAll.label + " " + label;
      break;

    case "close-modal":
      ref = XMarkIcon;
      use = closeModal.function + " " + use;
      label = closeModal.label + " " + label;
      break;

    case "fold":
      ref = ChevronUpIcon;
      use = fold.function + " " + use;
      label = fold.label + " " + label;
      break;

    case "unfold":
      ref = ChevronDownIcon;
      use = unfold.function + " " + use;
      label = unfold.label + " " + label;
      break;

    default:
      break;
  }

  return { ref, use, label };
}

export default selectIconForIconBtn;
