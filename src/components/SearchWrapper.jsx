import CardsWrapper from './CardsWrapper';
import SearchBar from './SearchBar';
import { useState } from 'react';

const SearchWrapper = () => {
  const [exercises, setExercises] = useState(null);

  return (
    <div>
      <SearchBar setExercises={setExercises} />
      {exercises && <CardsWrapper exercises={exercises} />}
    </div>
  );
};

export default SearchWrapper;
