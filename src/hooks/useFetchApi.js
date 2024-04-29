import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getsGifs";

export const useFetchApi = (category) => {
 const [images, setimages] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((images) => setimages(images));
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading
  }
}