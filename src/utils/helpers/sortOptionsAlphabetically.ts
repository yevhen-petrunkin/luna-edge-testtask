import { OptionsT, OptionT } from "../../types";

function sortOptionsAlphabetically(options: OptionsT): OptionsT {
  if (!options) {
    return [];
  }

  return options.sort((a: OptionT, b: OptionT) => a.name.localeCompare(b.name));
}

export default sortOptionsAlphabetically;
