import { useEffect, useState } from "react";

import { fetchAllPokemons } from "./utils/api";
import { sortOptionsAlphabetically } from "./utils/helpers";

import titles from "./data/titles.json";

import { Title, IconBtn, ButtonBase, Form } from "./components";

import { OptionsT } from "./types";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchAllPokemons().then((rawOptions: OptionsT) => {
      setPokemons(sortOptionsAlphabetically(rawOptions) as any);
    });
  }, []);

  return (
    <section className="container pb-[50vh]">
      <Title text={titles.main} variant="h1" className="text-center" />

      <Form options={pokemons} />

      <Title text={titles.modal} />
      <IconBtn variant="close-modal" clickHandler={() => {}} />
      <ButtonBase clickHandler={() => {}} />
    </section>
  );
}

export default App;
