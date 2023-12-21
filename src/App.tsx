import { Title, IconBtn, Button, Badge } from "./components";
import titles from "./data/titles.json";

function App() {
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
    </section>
  );
}

export default App;
