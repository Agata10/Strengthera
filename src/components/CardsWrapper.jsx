import Card from './Card';
const CardsWrapper = ({ exercises }) => {
  let exercisesData = exercises.map((e) => {
    return <Card key={e.id} exercise={e} />;
  });

  return <div>{exercisesData}</div>;
};

export default CardsWrapper;
