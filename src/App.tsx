import { useEffect, useState } from "react";

import { fetchAllPokemons } from "./utils/api";
import { sortOptionsAlphabetically } from "./utils/helpers";

import titles from "./data/titles.json";

import { Title, Form } from "./components";

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
    </section>
  );
}

export default App;
