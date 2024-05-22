import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import SearchExercices from './pages/SearchExercices';
import Workouts from './pages/Workouts';
import Exercise from './components/Exercise';
import './index.css';
function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route exact path="/exercises" element={<SearchExercices />} />
        <Route path="/exercises/:exerciseId" element={<Exercise />} />
      </Routes>
    </div>
  );
}

export default App;
