import { useNavigate } from 'react-router-dom';

const Card = ({ exercise, day, dispatch }) => {
  const { id, gifUrl, name, bodyPart, target } = exercise;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/exercises/${id}`);
  };

  const handleAddExercise = () => {
    dispatch({
      type: 'ADD_EXERCISE',
      payload: { day: day, exercise: { name: name, sets: 0, reps: 0 } },
    });
  };
  return (
    <div
      id={id}
      className="border-t-2 border-blue-400 pt-4 flex flex-col gap-3 font-logo "
    >
      <img
        src={gifUrl}
        alt={name}
        onClick={handleClick}
        className="cursor-pointer"
      />
      <h4 className="text-md md:text-lg font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
      <div className="flex gap-2">
        <button className="bg-orange-600 px-3 py-1 rounded-full text-xs md:text-sm cursor-default">
          {bodyPart}
        </button>
        <button className="bg-orange-400 px-2 rounded-full text-xs md:text-sm cursor-default">
          {target}
        </button>
      </div>
      {window.location.href.includes('workouts') && (
        <button onClick={handleAddExercise}>Add Exercise</button>
      )}
    </div>
  );
};

export default Card;
