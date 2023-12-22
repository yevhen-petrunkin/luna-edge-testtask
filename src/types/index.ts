import { RegisterOptions } from "react-hook-form";

export type IconBtnVariantT =
  | "close-badge"
  | "close-all"
  | "close-modal"
  | "fold"
  | "unfold";

export type IconDataT = {
  ref: any;
  use: string;
  label: string;
};

export type OptionT = { name: string; url: string };

export type OptionsT = OptionT[];

export type InputT = {
  id: string;
  label: string;
  type?: string | undefined;
  placeholder: string;
  name: string;
  assistiveText: string;
  options: Record<string, RegisterOptions>;
};

export type InputErrorT = {
  message: string;
  [key: string]: any;
};

export type SelectDataT = {
  id: string;
  label: string;
  message: string;
  fullTeamMessage: string;
  error: InputErrorT;
  maximumMembers: number;
};

export type UserDataT = {
  userName: string;
  userSurname: string;
};

export type TeamMemberDataT = {
  id: number;
  name: string;
  imageUrl?: string;
  expersience: number;
  height: number;
  weight: number;
  abilities: string[];
};
