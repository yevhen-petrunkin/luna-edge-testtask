import { OptionsT, OptionT } from "../../types";

function filterOptionsbyName(options: OptionsT, name: string): OptionsT {
  if (!name) {
    return options;
  }

  if (!options) {
    return [];
  }

  return options.filter((pokemon: OptionT) =>
    pokemon.name.toLowerCase().includes(name.toLowerCase())
  );
}

export default filterOptionsbyName;
