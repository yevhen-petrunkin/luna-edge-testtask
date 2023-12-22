import { OptionsT, OptionT } from "../../types";

function checkOptionsForPlayers(
  options: OptionsT,
  players: OptionsT
): OptionsT {
  if (!players) {
    return options;
  }

  if (!options) {
    return [];
  }

  const filteredPlayers = options.filter((option: OptionT) => {
    const isSuchPlayer = players.some(
      (player: OptionT) =>
        option.name.toLowerCase() === player.name.toLowerCase()
    );

    if (!isSuchPlayer) {
      return option;
    }
  });

  return filteredPlayers;
}

export default checkOptionsForPlayers;
