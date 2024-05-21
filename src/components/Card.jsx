import { useNavigate } from 'react-router-dom';
const Card = ({ exercise }) => {
  const { id, gifUrl, name, bodyPart, target } = exercise;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/exercises/${id}`);
  };
  return (
    <div
      id={id}
      className="border-t-2 border-blue-400 pt-4 flex flex-col gap-3 font-logo cursor-pointer"
      onClick={handleClick}
    >
      <img src={gifUrl} alt={name} />
      <h4 className="text-lg font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h4>
      <div className="flex gap-2">
        <button className="bg-orange-600 px-3 py-1 rounded-full text-sm cursor-default">
          {bodyPart}
        </button>
        <button className="bg-orange-400 px-2 rounded-full text-sm cursor-default">
          {target}
        </button>
      </div>
    </div>
  );
};

export default Card;
