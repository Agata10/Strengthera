import CardsWrapper from './CardsWrapper';
import SearchBar from './SearchBar';
import { useState } from 'react';

const SearchWrapper = () => {
  const [exercises, setExercises] = useState(null);

  const loaded = () => {
    if (exercises.length === 0) {
      return (
        <div className="text-center w-full mt-20">0 exercises founded...</div>
      );
    }
    if (exercises.find((e) => e.error)) {
      return (
        <div className="text-center w-full mt-20">
          Problem with fetching data...
        </div>
      );
    } else {
      return <CardsWrapper exercises={exercises} />;
    }
  };

  return (
    <div>
      <SearchBar setExercises={setExercises} />
      {exercises ? loaded() : ''}
    </div>
  );
};

export default SearchWrapper;
