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
  const handleGetExericses = (d) => {
    dispatch({ type: 'GET_EXERCISE', payload: { day: d } });
    setDay(d);
  };

  const handleDelete = (day, name) => {
    dispatch({
      type: 'DELETE_EXERCISE',
      payload: { day: day, exercise_name: name },
    });
  };

  const handleSets = () => {};
  const handleReps = () => {};
  return (
    <div>
      <div className="flex gap-3">
        {days.map((d) => (
          <div
            key={d}
            className="cursor-pointer h-10 w-24 border-orange-500 border-2"
            onClick={() => handleGetExericses(d)}
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
              const exercises = days.exercises.map((e) => {
                if (!e) return;
                return (
                  <li key={e.name}>
                    <p>{e.name}</p>
                    <input placeholder={e.sets} onChange={handleSets} />
                    <span>sets</span>
                    <input placeholder={e.reps} onChange={handleReps} />
                    <span>reps</span>
                    <button onClick={() => handleDelete(day, e.name)}>
                      delete
                    </button>
                  </li>
                );
              });
              return exercises;
            }
          })}
        </ol>
      </div>
    </div>
  );
};

export default DaysHolder;
