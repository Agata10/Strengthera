import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Exercise = () => {
  let { exerciseId } = useParams();
  const [exercise, setExercise] = useState('');
  useEffect(() => {
    const getExercise = async () => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`,
        params: {
          offset: '0',
          limit: '500',
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setExercise(response.data);
        return response;
      } catch (error) {
        console.error(error);
      }
    };
    getExercise();
  }, [exerciseId]);

  if (!exercise) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex w-9/12 mt-20 mx-auto gap-8">
        <img src={exercise.gifUrl} alt={exercise.name} />
        <div className="flex flex-col ">
          <h4 className="text-lg font-semibold">
            {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
          </h4>
          <div className="flex flex-col gap-2">
            <ul>
              {exercise.instructions.map((i, index) => {
                return <li key={index}>{i}</li>;
              })}
            </ul>
            <button className="bg-orange-600 px-3 py-1 rounded-full text-sm cursor-default">
              {exercise.bodyPart}
            </button>
            <button className="bg-orange-400 px-2 rounded-full text-sm cursor-default">
              {exercise.target}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
