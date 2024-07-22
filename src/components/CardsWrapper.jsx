import Card from './Card';
import { WorkoutContext } from '../pages/Workouts';
import { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';

const CardsWrapper = ({ currentItems }) => {
  {
    console.log(currentItems);
  }
  const context = useContext(WorkoutContext);
  const exercisesData = Array.isArray(currentItems)
    ? currentItems.map((e) => {
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
      })
    : [];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto w-10/12 gap-16 mt-16">
      {currentItems ? exercisesData : ''}
    </div>
  );
};

export default CardsWrapper;
