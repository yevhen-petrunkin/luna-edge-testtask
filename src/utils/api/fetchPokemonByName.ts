import axios from "axios";

async function fetchPokemonByName(name: string): Promise<any> {
  try {
    const res: any = await axios.get(
      `${import.meta.env.VITE_BASE_URL}${
        import.meta.env.VITE_MAIN_PARAMETER
      }/${name}`
    );

    return res?.data;
  } catch (error: any) {
    console.log(error, error.message);
    throw new Error();
  }
}

export default fetchPokemonByName;
