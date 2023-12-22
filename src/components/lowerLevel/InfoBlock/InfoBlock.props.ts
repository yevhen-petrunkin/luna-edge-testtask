import { FieldValues } from "react-hook-form";
import { TeamMemberDataT } from "../../../types";

interface IInfoBlockProps {
  userData?: FieldValues | undefined;
  teamMember?: TeamMemberDataT | undefined;
  className?: string | undefined;
}

export default IInfoBlockProps;
