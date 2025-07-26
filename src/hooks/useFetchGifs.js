import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFetchGifs(category) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading,
  };
}
