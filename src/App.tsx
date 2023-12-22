import { useEffect, useState } from "react";

import { fetchAllPokemons } from "./utils/api";
import { sortOptionsAlphabetically } from "./utils/helpers";

import titles from "./data/titles.json";

import { Title, IconBtn, ButtonBase, Form, InfoBlock } from "./components";

import { OptionsT } from "./types";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchAllPokemons().then((rawOptions: OptionsT) => {
      setPokemons(sortOptionsAlphabetically(rawOptions) as any);
    });
  }, []);

  return (
    <section className="container py-10">
      <Title text={titles.main} variant="h1" className="text-center" />

      <Form options={pokemons} />

      <Title text={titles.modal} />
      <IconBtn variant="close-modal" clickHandler={() => {}} />
      <ButtonBase clickHandler={() => {}} />
      <InfoBlock
        teamMember={{
          id: 132,
          name: "ditto",
          imageUrl:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
          experience: 101,
          height: 3,
          weight: 40,
          abilities: ["limber", "imposter"],
        }}
      />
    </section>
  );
}

export default App;
