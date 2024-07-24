import { NavLink } from 'react-router-dom';
const Nav = ({ visible }) => {
  return (
    <ul
      className={` ${
        visible ? 'flex flex-col w-full items-start mt-3 pl-10' : 'hidden'
      } md:flex md:flex-row md:justify-center md:items-center gap-2 md:mt-0 md:pl-0 text-slate-600`}
    >
      <li className="hover:underline underline-offset-4 decoration-orange-600">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline underline-offset-4 decoration-orange-600' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:underline underline-offset-4 decoration-orange-600">
        <NavLink
          to="/workouts"
          className={({ isActive }) =>
            isActive ? 'underline underline-offset-4 decoration-orange-600' : ''
          }
        >
          Workouts
        </NavLink>
      </li>
      <li className="hover:underline underline-offset-4 decoration-orange-600">
        <NavLink
          to="/exercises"
          className={({ isActive }) =>
            isActive ? 'underline underline-offset-4 decoration-orange-600' : ''
          }
        >
          Exercises
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
