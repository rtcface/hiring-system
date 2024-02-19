export const Header = () => {
  return (
    <div className=" flex items-center justify-between pb-6">
      <div>
        <h2 className="text-gray-300 font-semibold">Lista de contrataciones</h2>
        <span className="text-xs">Todas las contrataciones en sistema</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            className="outline-none ml-1 block text-gray-600"
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
        </div>
        <div className="lg:ml-40 ml-10 space-x-8">
          <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
            Nueva Contratación
          </button>
        </div>
      </div>
    </div>
  );
};
