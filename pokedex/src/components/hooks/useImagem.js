import axios from "axios";
import { useState, useEffect } from "react";

export const usePokemon = (initialState, url) => {
  const [details, setDetails] = useState(initialState);
  
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setDetails(res.data.sprites.front_default))
      .catch((error) => console.log(error));
  }, [url]);

  return details;
};