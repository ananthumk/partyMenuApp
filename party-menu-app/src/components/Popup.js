import React from 'react'
import ingredientImg from '../assests/ingredient.png'
import { useNavigate, useParams } from 'react-router-dom'

const Popup = ({popupData, handleRemoveCount, handleCount, setTotalDish, toggleDish, setShowPopup}) => {
  const navigate = useNavigate()
  return (
    <div className='popup-page'>
    <div className='popup-container'>
       <h1 onClick={() => setShowPopup(false)} className='close'>X</h1>
       <img src={popupData.image} alt={popupData.name} />
       <div className='heading-section'>
          <h2>{popupData.name}</h2>
          {!popupData.added ? 
          <button onClick={() => {setTotalDish(prevDetails => prevDetails + 1)
            toggleDish(popupData.id)
            handleCount(popupData.mealType)
          }} className='popup-btn'>
            Add +
          </button> : <button onClick={() => {setTotalDish(prevDetails => prevDetails - 1)
            toggleDish(popupData.id)
            handleCount(popupData.mealType)
          }} className='popup-remove-btn'>
            Remove
          </button>}
       </div>
       <div className='card-details'>
                 <p className='desc'>{popupData.description}</p>
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