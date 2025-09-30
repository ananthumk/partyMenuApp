import React from 'react'
import ingredientImg from '../assests/ingredient.png'
import { useNavigate } from 'react-router-dom'

const Popup = ({popupData, handleRemoveCount, handleCount, setTotalDish, toggleDish, setShowPopup}) => {
  const navigate = useNavigate()
  return (
    <div className='popup-page'>
    <div className='popup-container'>
       <h1 onClick={() => setShowPopup(false)} className='close'>X</h1> {/* close button */}
       <img src={popupData.category.image} alt={popupData.name} />
       <div className='heading-section'>
          <h2 style={{fontSize: '20px', fontWeight: '500'}}>{popupData.name}</h2>
          {!popupData.added ? 
          <button onClick={() => {setTotalDish(prevDetails => prevDetails + 1) // Increment total dish count
            toggleDish(popupData.id) // Toggle added state of the dish
            handleCount(popupData.mealType) // Increment count based on meal type
          }} className='popup-btn'> 
            Add +
          </button> : <button onClick={() => {toggleDish(popupData.id) // Toggle added state of the dish
            handleRemoveCount(popupData.mealType) // Decrement count based on meal type
            setTotalDish(prevDetails => prevDetails - 1) // Decrement total dish count
          }} className='popup-remove-btn'>
            Remove
          </button>}
       </div>
       <div className='card-details'>
                 <p className='descc'>{popupData.description}</p>
                 <div onClick={() => navigate(`/ingredient/${popupData.id}`)} className='card-ingredients'>
                   <img src={ingredientImg} style={{width: '24px', height: '24px'}} alt='ingredient' className='iconss' />
                   <p>Ingredients</p>
                 </div>
              </div>
    </div>
    </div>
  )
}

export default Popup