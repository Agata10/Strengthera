import Card from './Card';
import { WorkoutContext } from '../pages/Workouts';
import { useContext } from 'react';

const CardsWrapper = ({ exercises }) => {
  const context = useContext(WorkoutContext);

  const exercisesData = exercises.map((e) => {
    return context ? (
      <Card
        key={e.id}
        exercise={e}
        day={context.day}
        dispatch={context.dispatch}
      />
    ) : (
      <Card key={e.id} exercise={e} />
    );
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto w-8/12 lg:w-10/12 gap-16 mt-10">
      {exercisesData}
    </div>
  );
};

export default CardsWrapper;
