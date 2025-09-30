import ingredientImg from '../assests/ingredient.png'
import veg from '../assests/veg.png'
import nonVeg from '../assests/nonVeg.png'
import { useNavigate } from 'react-router-dom'

const DishCard = ({dish, setTotalDish, handleRemoveCount, handleCount, setShowPopup, toggleDish}) => {
  const navigate = useNavigate()
  return (
    <div className='card-section' key={dish.id}>
       <div className='card-details'>
          <div className='card-heading'>
          <h2>{dish.name}</h2>
          {dish.type === 'VEG' ? <img src={veg} alt='veg' /> : <img src={nonVeg} alt='non-veg' /> } 
          </div> 
          <p className='desc'>{dish.description.slice(0, 20)}...<span onClick={() => setShowPopup(true)} style={{fontWeight: 'bold'}}>Read more</span></p>
          <div onClick={() => navigate(`/ingredient/${dish.id}`)} className='card-ingredients'>
            <img src={ingredientImg} alt='ingredient' className='ingredient-icon' />
            <p>Ingredients</p>
          </div>
       </div>
       <div className='card-image-section'>
          <img src={dish.category.image} alt={dish.name} className='card-image' />
          {!dish.added ? 
          <button onClick={() => {toggleDish(dish.id)
            handleCount(dish.mealType) 
            setTotalDish(prevDetails => prevDetails + 1)
          }} className='add-btn'>
            Add +
          </button> : <button onClick={() => {toggleDish(dish.id) 
            handleRemoveCount(dish.mealType)
            setTotalDish(prevDetails => prevDetails - 1)
          }} className='remove-btn'>
            Remove
          </button> }
       </div>
    </div>
  )
}

export default DishCard