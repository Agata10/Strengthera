import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { exerciseInfoOptions } from '../utils/fetchData';
import { Hourglass } from 'react-loader-spinner';

const Exercise = () => {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (exerciseId) {
      const getExercise = async () => {
        try {
          setLoading(true);
          const response = await axios.request(exerciseInfoOptions(exerciseId));
          console.log(response.data);
          setExercise(response.data);
          return response;
        } catch (error) {
          console.error(error);
        } finally {
          setTimeout(() => setLoading(false), 1300);
        }
      };

      getExercise();
    }
  }, [exerciseId]);

  return (
    <div className="flex justify-center w-9/12 mt-20 mx-auto gap-8">
      {loading ? (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      ) : (
        exercise && (
          <div className="flex w-full mx-auto gap-8">
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
        )
      )}
    </div>
  );
};

export default Exercise;
