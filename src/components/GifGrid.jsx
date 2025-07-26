import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import Loader from "./Loader";

export default function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div key={category}>
        {/* Titulo */}
        <h3 className="text-2xl font-semibold mb-6">
          Resultados para: <span className="text-teal-400">"{category}"</span>
        </h3>

        {/* Loader o listado de imágenes */}
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
