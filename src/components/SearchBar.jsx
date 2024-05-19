import { useEffect, useRef } from 'react';
import axios from 'axios';
const SearchBar = () => {
  const inputRef = useRef('');
  useEffect(() => {
    const getExercises = async (name) => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
        params: {
          offset: '0',
          limit: '10',
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };
      console.log(options.headers['x-rapidapi-key']);
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getExercises(inputRef.current);
  }, [inputRef]);
  return (
    <div className="w-full flex justify-center items-center bg-slate-100 h-20">
      <form className="flex gap-6 w-full justify-center h-8">
        <input
          ref={inputRef}
          onChange={(e) => (inputRef.current = e.target.value)}
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
