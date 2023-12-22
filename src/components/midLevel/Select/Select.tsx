import cn from "classnames";

import { useState, useEffect, useCallback } from "react";

import {
  filterOptionsbyName,
  checkOptionsForPlayers,
  removePlayerByName,
} from "../../../utils/helpers";

import { OptionsBox, Badge, IconBtn, Label, AssistiveString } from "../..";
import { OptionsT, OptionT, InputErrorT } from "../../../types";

import ISelectProps from "./Select.props";

const Select: React.FC<ISelectProps> = ({
  selectData,
  options,
  changeHandler,
  className,
}) => {
  const maximumPlayers = 4;
  const [pokemons, setPokemons] = useState<OptionsT>(options);
  const [players, setPlayers] = useState<OptionsT>([]);
  const [error, setError] = useState<InputErrorT | null>(null);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);

  // Send the players list to the form state outside select component

  useEffect(() => {
    changeHandler(players);
  }, [players]);

  // Disable and reset input when the number of players exceeds maximum limit

  useEffect(() => {
    if (players.length >= maximumPlayers) {
      setValue("");
      setVisibility(false);
      setDisable(true);
      return;
    }

    setDisable(false);
  }, [players, setDisable]);

  useEffect(() => {}, []);

  // If there are no matches with options - toggle error

  useEffect(() => {
    if (visibility && pokemons.length === 0) {
      setError(selectData.error);
      return;
    }

    if (players.length >= maximumPlayers) {
      setError({ message: "The team is full." });
      return;
    }

    setError(null);
  }, [pokemons, setError, visibility]);

  // Filter pokemon list on input change - leave pokemons that match any options and remove pokemons that have already been selected as players

  const handleInputChange = useCallback(
    (input: string): void => {
      setValue(input);
      const filteredPokemons = filterOptionsbyName(options, input);
      const checkedPokemons = checkOptionsForPlayers(filteredPokemons, players);

      setPokemons(checkedPokemons);
    },
    [pokemons, setPokemons]
  );

  // Add a new player to the players list when an option from options box has been clicked

  const handleOptionClick = useCallback(
    (option: OptionT) => {
      setPlayers((prev) => [...prev, option]);

      const newPlayers = [...players, option];
      const checkedPokemons = checkOptionsForPlayers(options, newPlayers);

      setPokemons(checkedPokemons);
    },
    [setPlayers]
  );

  // On input focus, first remove pokemons that have already been selected as players to prevent adding same players to the player list, and then show options box

  const handleInputFocus = useCallback(() => {
    const filteredPokemons = filterOptionsbyName(options, value);
    const checkedPokemons = checkOptionsForPlayers(filteredPokemons, players);

    setPokemons(checkedPokemons);
    setVisibility(true);
  }, [pokemons, players, setPokemons, setVisibility]);

  // On input losing focus, if a new player has been selected, let the player to be added to the player list before closing the options box

  const handleInputBlur = useCallback(() => {
    setTimeout(() => setVisibility(false), 200);
  }, [setVisibility]);

  // Remove a player from players list when a close button on a badge has been clicked

  const removePlayer = (playerName: string) => {
    const filteredPlayers = removePlayerByName(players, playerName);

    if (filteredPlayers.length < maximumPlayers) {
      setError(null);
    }
    setPlayers(filteredPlayers);

    const checkedPokemons = checkOptionsForPlayers(options, filteredPlayers);
    setPokemons(checkedPokemons);
  };

  // Clear the players list, restore input functionality

  const removeAllPlayers = () => {
    setPlayers([]);
    const checkedPokemons = checkOptionsForPlayers(options, []);
    setPokemons(checkedPokemons);

    setDisable(false);
    setError(null);
  };

  // Open options box

  const unfoldOptions = () => {
    const checkedPokemons = checkOptionsForPlayers(options, players);
    setPokemons(checkedPokemons);

    setVisibility(true);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label id={selectData.id} text={selectData.label} />

      <div
        className={`relative min-h-12 flex items-center justify-end gap-1 px-3 py-1 w-full border rounded ${
          error ? "input-error" : "select-behavior"
        } `}
      >
        <div className="flex items-center flex-wrap w-full">
          {players &&
            players.map((player) => (
              <Badge
                key={player.name + player.url}
                text={player.name}
                clickHandler={removePlayer}
              />
            ))}

          {!disable && (
            <input
              className="py-2 grow max-w-full outline-none"
              type="text"
              name={selectData.id}
              value={value}
              placeholder="Select"
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              autoComplete="off"
            />
          )}
        </div>

        {players.length > 0 ? (
          <IconBtn variant="close-all" clickHandler={removeAllPlayers} />
        ) : (
          ""
        )}

        {!disable &&
          (visibility ? (
            <IconBtn variant="fold" clickHandler={() => setVisibility(false)} />
          ) : (
            <IconBtn variant="unfold" clickHandler={unfoldOptions} />
          ))}

        <OptionsBox
          options={pokemons}
          visibility={visibility}
          clickHandler={handleOptionClick}
          className="-bottom-[30.5vh] left-0"
        />
      </div>

      <AssistiveString text={selectData.message} error={error} />
    </div>
  );
};

export default Select;
