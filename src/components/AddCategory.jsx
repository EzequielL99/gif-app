import { useState } from "react";

export default function AddCategory({ onAddCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = inputValue.trim();
    // Validacion
    if (newCategory.length <= 1) return;

    onAddCategory(newCategory);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}
