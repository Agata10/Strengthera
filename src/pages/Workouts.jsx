import Header from '../components/Header';
import SearchWrapper from '../components/SearchWrapper';
import { createContext, useEffect, useReducer, useState } from 'react';
import { reducer } from '../utils/reducer';
import WorkoutPerDay from '../components/WorkoutPerDay';

const initialState = JSON.parse(localStorage.getItem('workouts')) || [
  { day: 'Monday', exercises: [] },
  { day: 'Tuesday', exercises: [] },
  { day: 'Wednesday', exercises: [] },
  { day: 'Thursday', exercises: [] },
  { day: 'Friday', exercises: [] },
  { day: 'Saturday', exercises: [] },
  { day: 'Sunday', exercises: [] },
];

export const WorkoutContext = createContext();

const Workouts = () => {
  const [workout, dispatch] = useReducer(reducer, initialState);
  const [day, setDay] = useState('Monday');

  useEffect(() => {
    const isLocalStorage = JSON.parse(localStorage.getItem('workouts'));
    if (!isLocalStorage) {
      localStorage.setItem('workouts', JSON.stringify(initialState));
    }
  }, []);

  return (
    <div>
      <Header />
      <WorkoutContext.Provider value={{ day, setDay, workout, dispatch }}>
        <WorkoutPerDay />
        <SearchWrapper />
      </WorkoutContext.Provider>
    </div>
  );
};

export default Workouts;
