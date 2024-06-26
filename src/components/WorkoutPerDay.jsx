import { useContext } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { WorkoutContext } from '../pages/Workouts';
import DaysSwiper from './DaysSwiper';

const WorkoutPerDay = () => {
  const { day, setDay, workout, dispatch } = useContext(WorkoutContext);

  const handleDelete = (day, name) => {
    dispatch({
      type: 'DELETE_EXERCISE',
      payload: { day: day, exercise_name: name },
    });
  };

  const handleSets = (day, name, sets) => {
    dispatch({
      type: 'UPDATE_SETS',
      payload: { day: day, exercise_name: name, value: sets },
    });
  };
  const handleReps = (day, name, reps) => {
    console.log(name);
    dispatch({
      type: 'UPDATE_REPS',
      payload: { day: day, exercise_name: name, value: reps },
    });
  };

  const workoutThatDay = workout.map((days) => {
    if (days.day === day) {
      if (days.exercises.length === 0) {
        return 'Rest day';
      }
      const exercises = days.exercises.map((exercise) => {
        return (
          <li key={exercise.name}>
            <div className="flex items-center">
              <p className="mr-3 md:mr-8 w-4/6 md:w-56">
                {exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1)}
              </p>
              <input
                className="w-4 md:w-6  text-left placeholder:text-slate-800 rounded-md hover:shadow-sm hover:shadow-blue-400"
                placeholder={exercise.sets}
                onBlur={(e) =>
                  handleSets(day, exercise.name, Number(e.target.value))
                }
              />
              <span className="mr-4 md:mr-8">sets</span>
              <input
                className="w-5 md:w-6 text-left placeholder:text-slate-800 rounded-md hover:shadow-sm hover:shadow-blue-400"
                placeholder={exercise.reps}
                onBlur={(e) =>
                  handleReps(day, exercise.name, Number(e.target.value))
                }
              />
              <span className="mr-4 md:mr-8">reps</span>
              <button
                className="flex items-center justify-center"
                onClick={() => handleDelete(day, exercise.name)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="rgb(37 99 235)"
                  className="size-5 hover:scale-110"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        );
      });
      return exercises;
    }
  });
  return (
    <div className="mt-10">
      <DaysSwiper dispatch={dispatch} setDay={setDay} />
      <div className="w-11/12 md:w-10/12 mx-auto my-10 p-5 shadow shadow-slate-300 rounded-sm border-b-2 border-blue-400">
        <h2 className="text-2xl">{day}</h2>
        <ol className="px-4 list-decimal flex flex-col gap-1 mt-4 text-md pl-5 md:pl-10">
          {workoutThatDay}
        </ol>
      </div>
    </div>
  );
};

export default WorkoutPerDay;
