
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';
import Ingredient from './components/Ingredient.js';

function App() {
  const [vegCategory, setVeg] = useState(false) // State to track if VEG category is selected
  const [nonVegCategory, setNonVeg] = useState(false) // State to track if NON-VEG category is selected
  const [category, setCategory] = useState('MAIN COURSE') // State to track the selected meal type category
  const [mcCount, setMcCount] = useState(0) // State to track count of MAIN COURSE dishes
  const [dCount, setdCount] = useState(0) // State to track count of DESSERT dishes
  const [sidesCount, setSidesCount] = useState(0) // State to track count of SIDES dishes
  const [sCount, setsCount] = useState(0) // State to track count of STARTERS dishes
  const [totalDish, setTotalDish] = useState(0) // State to track total number of dishes added
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
