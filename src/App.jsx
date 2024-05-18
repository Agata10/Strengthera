import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/workouts' element={<Home/>}/>
      <Route path='/exercises' element={<SearchExercices/>}/>
    </Routes>
    </>
  )
}

export default App
