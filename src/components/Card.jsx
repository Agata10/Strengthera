const Card = ({ exercise }) => {
  const { id, gifUrl, name, bodyPart, target } = exercise;
  return (
    <div id={id}>
      <img src={gifUrl} alt={name} />
      <h4>{name}</h4>
      <p>
        {bodyPart}
        <span>{target}</span>
      </p>
    </div>
  );
};

export default Card;
