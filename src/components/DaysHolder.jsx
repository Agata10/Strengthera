import { useContext } from 'react';
import { WorkoutContext } from '../pages/Workouts';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const DaysHolder = () => {
  const { day, setDay, workout, dispatch } = useContext(WorkoutContext);
  return (
    <div>
      <div className="flex gap-3">
        {days.map((d) => (
          <div
            key={d}
            className="cursor-pointer h-10 w-24 border-orange-500 border-2"
            onClick={() => {
              dispatch({ type: 'GET_EXERCISE', payload: { day: d } });
              setDay(d);
            }}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="h-3/6">
        <h2>{day}</h2>
        <ol>
          {workout.map((days) => {
            if (days.day === day) {
              const exercises = days.exercises.map((e) => <li key={e}>{e}</li>);
              return exercises;
            }
          })}
        </ol>
      </div>
    </div>
  );
};

export default DaysHolder;
