const SearchBar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-100 h-20">
      <form className="flex gap-6 w-full justify-center h-8">
        <input
          type="text"
          placeholder="Search exercises..."
          className="w-4/12 md:w-3/12 shadow shadow-blue-400 rounded-md px-2 hover:shadow-md hover:shadow-blue-400 outline-blue-400"
        />
        <button
          type="submit"
          className="rounded-xl bg-orange-400 text-white py-1 px-4 hover:shadow-sm hover:bg-orange-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
