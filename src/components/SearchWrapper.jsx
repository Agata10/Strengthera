import { ExercisesContext } from '../App';
import CardsWrapper from './CardsWrapper';
import Paginate from './Paginate';
import SearchBar from './SearchBar';
import { useContext, useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';

const SearchWrapper = () => {
  const context = useContext(ExercisesContext);
  const { exercises, setExercises } = context;
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(exercises || null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (exercises !== null) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      const endOffset = itemOffset + 12;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      const currItems = exercises.slice(itemOffset, endOffset);
      const pageCounts = Math.ceil(exercises.length / 12);
      setCurrentItems(currItems);
      setPageCount(pageCounts);
      return () => clearTimeout(timer);
    }
  }, [exercises, itemOffset]);

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
      return (
        <Paginate
          currentItems={currentItems}
          pageCount={pageCount}
          setItemOffset={setItemOffset}
          exercises={exercises}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      );
    }
  };

  return (
    <div className="relative mb-6">
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
