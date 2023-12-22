import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import { useEffect, useState } from "react";

import { fetchAllPokemons } from "./utils/api";
import { sortOptionsAlphabetically } from "./utils/helpers";

import titles from "./data/titles.json";
import form from "./data/form.json";

import {
  Title,
  IconBtn,
  Button,
  Badge,
  ButtonBase,
  OptionsBox,
  Input,
} from "./components";

import { OptionsT, InputT } from "./types";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchAllPokemons().then((rawOptions: OptionsT) => {
      setPokemons(sortOptionsAlphabetically(rawOptions) as any);
    });
  }, []);

  const data = JSON.parse(JSON.stringify(form));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = () => {};

  return (
    <section className="container">
      <Title text={titles.main} variant="h1" className="text-center" />
      <Title text={titles.form} />
      <Title text={titles.modal} />

      <IconBtn variant="close-badge" clickHandler={() => {}} />
      <IconBtn variant="close-all" clickHandler={() => {}} />
      <IconBtn variant="close-modal" clickHandler={() => {}} />
      <IconBtn variant="fold" clickHandler={() => {}} />
      <IconBtn variant="unfold" clickHandler={() => {}} />

      <Button
        text="Confirm Team"
        type="submit"
        size="lg"
        clickHandler={() => {}}
        decorated
      />

      <Button text="Save" clickHandler={() => {}} />
      <Button text="Cancel" variant="text" clickHandler={() => {}} />

      <Button
        text="Confirm Team"
        type="submit"
        size="lg"
        clickHandler={() => {}}
        decorated
        disabled
      />

      <Button text="Save" clickHandler={() => {}} disabled />
      <Button text="Cancel" variant="text" clickHandler={() => {}} disabled />

      <Badge text="bulbasaur" clickHandler={() => {}} />

      <ButtonBase clickHandler={() => {}} />

      <OptionsBox
        options={pokemons}
        visibility={false}
        clickHandler={() => {}}
      />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <ul>
          {data.inputs.map((input: InputT) => {
            return (
              <li key={input.id}>
                <Input input={input} register={register} errors={errors} />
              </li>
            );
          })}
        </ul>
        <Button text={data.button.text} type="submit" size="lg" decorated />
      </form>
    </section>
  );
}

export default App;
