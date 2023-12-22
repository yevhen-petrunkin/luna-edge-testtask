import { FieldValues } from "react-hook-form";
import { TeamMemberDataT } from "../../../types";

interface ITeamBoardProps {
  userData: FieldValues | undefined;
  participants: TeamMemberDataT[];
  clickHandler: (needSave: boolean) => void;
  className?: string | undefined;
}

export default ITeamBoardProps;
