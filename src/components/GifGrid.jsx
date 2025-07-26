import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import Loader from "./Loader";

export default function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div key={category}>
      <h3>{category}</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </ul>
      )}
    </div>
  );
}
