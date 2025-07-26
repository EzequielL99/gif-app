export default function Header() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("SUBMIT");
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex 
        flex-col sm:flex-row items-center justify-between gap-4"
      >
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-teal-400">GIF</span>-Expert-App
        </h1>

        <form
          className="w-full sm:w-auto flex items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Buscar GIFs..."
            className="w-full sm:w-64 px-4 py-2 rounded-lg bg-gray-800 
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Buscar GIFs"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 
                    text-white rounded-lg transition-colors"
          >
            Buscar
          </button>
        </form>
      </div>
    </header>
  );
}
