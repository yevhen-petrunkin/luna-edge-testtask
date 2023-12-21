export type IconBtnVariant =
  | "close-badge"
  | "close-all"
  | "close-modal"
  | "fold"
  | "unfold";

export type IconData = {
  ref: any;
  use: string;
  label: string;
};

export type Option = { name: string; url: string };

export type Options = Option[];
