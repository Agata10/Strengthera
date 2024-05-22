import Card from './Card';

const CardsWrapper = ({ exercises }) => {
  const exercisesData = exercises.map((e) => {
    return <Card key={e.id} exercise={e} />;
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto w-8/12 lg:w-10/12 gap-10 mt-10">
      {exercisesData}
    </div>
  );
};

export default CardsWrapper;
