import cn from "classnames";

import titles from "../../../data/titles.json";

import { Title, InfoBlock, ButtonBase } from "../..";

import ITeamBoardProps from "./TeamBoard.props";

const TeamBoard: React.FC<ITeamBoardProps> = ({
  userData,
  participants,
  clickHandler,
  className,
}) => {
  return (
    <section className={cn("flex flex-col gap-4 h-full ", className)}>
      <Title
        className="absolute top-4 left-2 base:left-4 xl:left-8"
        text={titles.modal}
      />

      <InfoBlock userData={userData} />

      {participants &&
        participants.length > 0 &&
        participants.map((participant) => (
          <InfoBlock key={participant.id} teamMember={participant} />
        ))}
      <ButtonBase className="text-right" clickHandler={clickHandler} />
    </section>
  );
};

export default TeamBoard;
