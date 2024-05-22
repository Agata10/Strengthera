import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { WorkoutContext } from '../pages/Workouts';
import { breakpoints } from '../utils/breakpoints';

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
      const exercises = days.exercises.map((exercise) => {
        if (!exercise) return null;
        return (
          <li key={exercise.name}>
            <span>{exercise.name}</span>
            <input
              placeholder={exercise.sets}
              onBlur={(e) =>
                handleSets(day, exercise.name, Number(e.target.value))
              }
            />
            <span>sets</span>
            <input
              placeholder={exercise.reps}
              onBlur={(e) =>
                handleReps(day, exercise.name, Number(e.target.value))
              }
            />
            <span>reps</span>
            <button onClick={() => handleDelete(day, exercise.name)}>
              delete
            </button>
          </li>
        );
      });
      return exercises;
    }
  });
  return (
    <div>
      <Swiper
        className="flex gap-3 w-full mySwiper relative h-16 px-20"
        spaceBetween={10}
        slidesPerView={7}
        breakpoints={breakpoints}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {days.map((d) => (
          <SwiperSlide
            key={d}
            className="cursor-pointer h-10 border-orange-500 border-2 w-24"
            onClick={() => handleGetExericses(d)}
          >
            {d}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-3/6">
        <h2>{day}</h2>
        <ol className="px-4 list-decimal">{workoutThatDay}</ol>
      </div>
    </div>
  );
};

export default DaysHolder;
