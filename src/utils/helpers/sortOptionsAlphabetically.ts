import { Options, Option } from "../../types";

function sortOptionsAlphabetically(options: Options): Options {
  if (!options) {
    return [];
  }

  return options.sort((a: Option, b: Option) => a.name.localeCompare(b.name));
}

export default sortOptionsAlphabetically;
