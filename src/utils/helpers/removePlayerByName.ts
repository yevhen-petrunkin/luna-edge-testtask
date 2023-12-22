import { OptionsT, OptionT } from "../../types";

function removePlayerByName(players: OptionsT, playerName: string): OptionsT {
  if (!playerName) {
    return players;
  }

  if (!players) {
    return [];
  }

  return players.filter(
    (player: OptionT) => playerName.toLowerCase() !== player.name.toLowerCase()
  );
}

export default removePlayerByName;
