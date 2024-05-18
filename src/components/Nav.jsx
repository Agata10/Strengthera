import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <ul>
        <li>
            <Link to='/'>Home</Link></li>
        <li>Workouts</li>
        <li>Exercises</li>
    </ul>
  )
}

export default Nav