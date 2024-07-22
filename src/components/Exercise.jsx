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
        // try {
        //   setLoading(true);
        //   const response = await axios.request(exerciseInfoOptions(exerciseId));
        //   console.log(response.data);
        //   setExercise(response.data);
        //   return response;
        // } catch (error) {
        //   console.error(error);
        // } finally {
        //   setTimeout(() => setLoading(false), 1300);
        // }
      };

      getExercise();
    }
  }, [exerciseId]);

  return (
    <div className="flex justify-center w-9/12 mt-20 mx-auto gap-8 min-h-full mb-20">
      {loading ? (
        <Hourglass
          visible={true}
          height="60"
          width="60"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      ) : (
        exercise && (
          <div className="flex w-10/12 h-4/6 mx-auto gap-8">
            <img src={exercise.gifUrl} alt={exercise.name} />
            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold">
                {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
              </h4>
              <div className="flex flex-col gap-2">
                <ol className="list-decimal pb-2 pl-4">
                  {exercise.instructions.map((i, index) => {
                    return <li key={index}>{i}</li>;
                  })}
                </ol>
                <div>
                  <button className="bg-orange-600 px-3 py-2 rounded-full text-sm cursor-default w-1/6">
                    {exercise.bodyPart}
                  </button>
                  <button className="bg-orange-400 px-2 py-2 rounded-full text-sm cursor-default w-1/6">
                    {exercise.target}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Exercise;
