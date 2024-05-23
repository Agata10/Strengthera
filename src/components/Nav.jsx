import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <ul className="flex justify-center items-center gap-2 text-slate-700">
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
