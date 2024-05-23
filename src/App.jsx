import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import SearchExercices from './pages/SearchExercices';
import Workouts from './pages/Workouts';
import ExercisePage from './pages/ExercisePage';
import './index.css';
import { createContext, useState } from 'react';
export const ExercisesContext = createContext();

function App() {
  const [exercises, setExercises] = useState(null);
  return (
    <div className="w-full h-full">
      <ExercisesContext.Provider value={{ exercises, setExercises }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/exercises" element={<SearchExercices />} />
          <Route path="/exercises/:exerciseId" element={<ExercisePage />} />
        </Routes>
      </ExercisesContext.Provider>
    </div>
  );
}

export default App;
