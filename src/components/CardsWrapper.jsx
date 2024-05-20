import Card from './Card';
const CardsWrapper = ({ exercises }) => {
  const exercisesData = exercises.map((e) => {
    <Card key={e.id} exercise={e} />;
  });
  return <div>{exercisesData}</div>;
};

export default CardsWrapper;
