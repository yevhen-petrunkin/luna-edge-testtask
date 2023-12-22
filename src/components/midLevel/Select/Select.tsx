import cn from "classnames";

import { useState, useEffect, useCallback, useMemo } from "react";

import { fetchAllPokemons } from "../../../utils/api";
import { sortOptionsAlphabetically } from "../../../utils/helpers";

import { OptionsBox, Badge, IconBtn } from "../..";
import { OptionsT, InputT } from "../../../types";

import ISelectProps from "./Select.props";

const Select: React.FC<ISelectProps> = ({ changeHandler, className }) => {
  const [pokemons, setPokemons] = useState([]);
  const [players, setPlayers] = useState([]);

  return <div></div>;
};

export default Select;
