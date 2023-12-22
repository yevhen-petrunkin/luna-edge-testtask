import cn from "classnames";

import IInfoBlockProps from "./InfoBlock.props";

const InfoBlock: React.FC<IInfoBlockProps> = ({
  userData,
  teamMember,
  className,
}) => {
  return (
    <article
      className={cn(
        "flex items-center justify-center py-4 w-full text-sm base:text-base border rounded-lg bg-accent-light",
        className
      )}
    >
      {userData && (
        <>
          <p className="pr-4">Team Leader: </p>
          <p className="text-md font-medium">
            {userData?.userName} {userData?.userSurname}
          </p>
        </>
      )}

      {teamMember && (
        <>
          {" "}
          <img
            src={teamMember?.imageUrl}
            alt={teamMember?.name}
            className="w-20 base:w-32 h-20 base:h-32"
          />
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="px-2 font-medium">Name:</td>
                <td>{teamMember?.name}</td>
              </tr>
              <tr>
                <td className="px-2 font-medium">Height:</td>
                <td>{teamMember?.height}</td>
              </tr>
              <tr>
                <td className="px-2 font-medium">Weight:</td>
                <td>{teamMember?.weight}</td>
              </tr>
              <tr>
                <td className="px-2 font-medium">Experience:</td>
                <td>{teamMember?.experience}</td>
              </tr>
              <tr>
                <td className="px-2 font-medium">Abilities:</td>
                <td>{teamMember?.abilities.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </article>
  );
};

export default InfoBlock;
