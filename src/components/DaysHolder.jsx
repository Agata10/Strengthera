import { useContext, useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);

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
        if (!exercise) {
          return null;
        }
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
      if (exercises.length === 0) {
        return 'Rest day';
      } else {
        return exercises;
      }
    }
  });
  return (
    <div className="mt-10">
      <Swiper
        className="mySwiper relative h-16 px-20"
        spaceBetween={10}
        breakpoints={breakpoints}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        onClick={(swipper) => setActiveIndex(swipper.clickedIndex)}
      >
        {days.map((d, index) => (
          <SwiperSlide
            key={d}
            id={index}
            className={`${
              index == activeIndex ? 'active' : ''
            } cursor-pointer h-11 bg-orange-400 rounded hover:bg-blue-500 w-24 flex items-center justify-center text-slate-50 	`}
            onClick={() => handleGetExericses(d)}
          >
            {d}
            {console.log(index)}
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
