import { ExercisesContext } from '../App';
import CardsWrapper from './CardsWrapper';
import SearchBar from './SearchBar';
import { useContext, useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';

const SearchWrapper = () => {
  const context = useContext(ExercisesContext);
  const { exercises, setExercises } = context;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (exercises !== null) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [exercises]);

  const loaded = () => {
    if (exercises.length === 0) {
      return (
        <div className="text-center w-full my-20">0 exercises founded...</div>
      );
    }
    if (exercises.find((e) => e.error)) {
      return (
        <div className="text-center w-full my-20">
          Problem with fetching data...
        </div>
      );
    } else {
      return <CardsWrapper exercises={exercises} />;
    }
  };

  return (
    <div className="relative mb-20">
      <SearchBar setExercises={setExercises} />
      {loading ? (
        <div className="flex justify-center mx-auto my-10">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      ) : (
        exercises && loaded()
      )}
    </div>
  );
};

export default SearchWrapper;
