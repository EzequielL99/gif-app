import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Header from "./components/Header";

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // Validar si ya existe
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <Header />

      {/* Input */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
}
