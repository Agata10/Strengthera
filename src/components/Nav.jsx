import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <ul>
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="workouts">Workouts</Link>
      </li>
      <li>
        <Link to="/exercises">Exercises</Link>
      </li>
    </ul>
  );
};

export default Nav;
