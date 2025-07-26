import { useState } from "react";
import GifGrid from "./components/GifGrid";
import Header from "./components/Header";
import CategoryList from "./components/CategoryList";

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // Validar si ya existe
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const onDeleteCategory = (categoryToDelete) => {
    setCategories(
      categories.filter((category) => category !== categoryToDelete)
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header onAddCategory={onAddCategory} />

      {/* Lista de categorías buscadas */}
      {categories.length > 0 && (
        <CategoryList
          categories={categories}
          onDeleteCategory={onDeleteCategory}
        />
      )}

      {/* Listado de Gif */}
      {categories.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h2 className="text-4xl font-semibold mb-4">Lista de GIFs vacía</h2>
          <p className="text-md text-teal-400">
            Prueba buscando algo que te guste!
          </p>
        </div>
      )}

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </div>
  );
}
