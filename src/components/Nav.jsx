import { Link } from 'react-router-dom';
const Nav = ({ visible }) => {
  return (
    <ul
      className={` ${
        visible ? 'flex flex-col w-full items-start mt-3' : 'hidden'
      } md:flex md:flex-row md:justify-center md:items-center gap-2 md:mt-0 text-slate-700`}
    >
      <li className="hover:underline underline-offset-4 decoration-orange-600">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-orange-600">
        <Link to="/workouts">Workouts</Link>
      </li>
      <li className="hover:underline underline-offset-4 decoration-orange-600">
        <Link to="/exercises">Exercises</Link>
      </li>
    </ul>
  );
};

export default Nav;
