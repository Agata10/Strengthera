import { useState } from 'react';
import axios from 'axios';
import { exercisesOptions } from '../utils/fetchData';

const SearchBar = ({ setExercises }) => {
  const [searchInput, setSearchInput] = useState('');

  const getExercises = async () => {
    try {
      if (searchInput.length > 0) {
        const response = await axios.request(exercisesOptions);
        const filterData = response.data.filter(
          (exercise) =>
            exercise.name.includes(searchInput) ||
            exercise.bodyPart.includes(searchInput) ||
            exercise.target.includes(searchInput) ||
            exercise.equipment.includes(searchInput)
        );
        setExercises(filterData);
        setSearchInput('');
        return filterData;
      }
    } catch (error) {
      setExercises((prev) => [...prev, { error: 'No data fetched' }]);
      console.error(error);
      return error;
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-slate-100 h-20">
      <form
        className="flex gap-6 w-full justify-center h-8"
        onSubmit={(e) => {
          e.preventDefault();
          getExercises();
        }}
      >
        <input
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          value={searchInput}
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
