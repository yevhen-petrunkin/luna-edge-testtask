import axios from "axios";
import { OptionsT } from "../../types";

async function fetchAllPokemons(): Promise<OptionsT> {
  try {
    const res = await axios.get(
      import.meta.env.VITE_BASE_URL + import.meta.env.VITE_MAIN_PARAMETER,
      {
        params: {
          limit: "100000",
          offset: "0",
        },
      }
    );

    return res?.data?.results;
  } catch (error: any) {
    console.log(error, error.message);
    return [];
  }
}

export default fetchAllPokemons;
