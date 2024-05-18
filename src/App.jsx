import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import SearchExercices from './pages/SearchExercices'
import Workouts from './pages/Workouts'
import './index.css';
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/workouts' element={<Workouts/>}/>
      <Route path='/exercises' element={<SearchExercices/>}/>
    </Routes>
    </>
  )
}

export default App
