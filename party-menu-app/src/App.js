
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import Ingredient from './components/Ingredient.js';

function App() {
  const [vegCategory, setVeg] = useState(false)
  const [nonVegCategory, setNonVeg] = useState(false)
  const [category, setCategory] = useState('MAIN COURSE')
  const [mcCount, setMcCount] = useState(0)
  const [dCount, setdCount] = useState(0)
  const [sidesCount, setSidesCount] = useState(0)
  const [sCount, setsCount] = useState(0)
  const [totalDish, setTotalDish] = useState(0)
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <Home totalDish={totalDish} setTotalDish={setTotalDish} mcCount={mcCount} setMcCount={setMcCount} setdCount={setdCount} setSidesCount={setSidesCount} setsCount={setsCount} dCount={dCount} sidesCount={sidesCount} sCount={sCount} category={category} setCategory={setCategory} vegCategory={vegCategory} setVeg={setVeg} nonVegCategory={nonVegCategory} setNonVeg={setNonVeg} />} />
        <Route exact path='/ingredient/:id' element={<Ingredient />} />
      </Routes>
    </div>
  );
}

export default App;
