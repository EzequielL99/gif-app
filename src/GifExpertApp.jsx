import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGridItem from "./components/GifGridItem";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // Validar si ya existe
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      {/* Input */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGridItem category={category} key={category} />
      ))}
    </>
  );
}
