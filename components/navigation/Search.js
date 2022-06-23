import { SearchIcon } from "@heroicons/react/outline";
const Search = () => {
  return (
    <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
      <div className="w-full sm:w-96 ">
        <label htmlFor="search" className="sr-only">
          Keresés
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-epgreen focus:border-epgreen sm:text-sm"
            placeholder="Keresés"
            type="search"
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
