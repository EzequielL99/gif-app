import { XMarkIcon } from "@heroicons/react/16/solid";

export default function CategoryList({ categories, onDeleteCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-6">
      <h2 className="text-xl font-semibold mb-4">Categorías:</h2>
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li
            key={category}
            className="rounded-full bg-gray-600 px-3 py-1 flex items-center text-white justify-center gap-2"
          >
            <span className="text-sm/7">{category}</span>
            <button
              className="cursor-pointer"
              onClick={() => onDeleteCategory(category)}
              aria-label={`Eliminar categoría ${category}`}
            >
              <XMarkIcon className="h-4 w-4 text-gray-300 hover:text-red-400 transition-colors" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
