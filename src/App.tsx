import { Title, IconBtn, Badge } from "./components";
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

      <Badge text="bulbasaur" clickHandler={() => {}} />
    </section>
  );
}

export default App;
