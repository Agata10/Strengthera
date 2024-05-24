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
      className="border-t-2 border-blue-400 pt-4 flex flex-col gap-3 font-logo hover:-translate-y-4 hover:scale-105"
    >
      <img
        src={gifUrl}
        alt={name}
        onClick={handleClick}
        className="cursor-pointer relative"
      />

      <div className="flex gap-2">
        <button className="bg-orange-600 px-3 h-6 md:py-1 rounded-full text-xs md:text-sm cursor-default">
          {bodyPart}
        </button>
        <button className="bg-orange-400 px-2 h-6 rounded-full text-xs md:text-sm cursor-default">
          {target}
        </button>
        {window.location.href.includes('workouts') && (
          <button
            onClick={handleAddExercise}
            className="text-xs md:text-sm bg-blue-500 px-4 h-6 rounded-md ml-auto mr-2"
          >
            Add
          </button>
        )}
      </div>
      <h4 className="text-sm md:text-lg font-semibold col-span-2">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
    </div>
  );
};

export default Card;
