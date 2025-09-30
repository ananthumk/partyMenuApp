import React from 'react'
import arrow from '../assests/leftArrow.png'
import image from '../assests/ingredientBg.png'
import { useParams } from 'react-router-dom'
import { dishes } from '../data/mockDishes'
import { useNavigate } from 'react-router-dom'

const ingredients = [
    {name: 'Cauliflower', quantity: '01 Pc'},
    {name: 'Mustard Oil', quantity: '1/2 litres'},
    {name: 'Tomato', quantity: '01 Pc'}, 
    {name: 'Cauliflower', quantity: '01 Pc'}
] // ingredients data

const Ingredient = () => {
    const {id} = useParams() // retrieve data from url
    const navigate = useNavigate() // For navigating through pages
    console.log(id)
    const data = dishes?.find(dish => dish.id === Number(id))
  return (
    <div className='ingredient-container'>
        <div className='ingedient-header'>
            <img onClick={() => navigate('/')} src={arrow} alt='back-arrow' /> {/*To return to home page */}
            <h2>Ingredient List</h2>
        </div>
        <div style={{marginTop: '10px'}} className='ingredient-details-container'>
            <div className='details-section-i'>
            <div className='i-details-section'>
                <h2>{data?.name}</h2>
                <p>{data?.description}</p>
            </div>
            <div className='for-people'>
                 <h2 style={{fontSize: '18px', fontWeight: '700'}}>Ingredients</h2>
                 <p style={{fontSize: '14px'}}>For 2 people</p>
            </div>
            </div>
            <img src={image} alt='bgimage' className='bgImage' />
        </div>
        <hr />
        
            {ingredients?.map((ingredient, index) => (
                <div className='ingredient-sections' key={index}>
                <p>{ingredient.name}</p>
                <p>{ingredient.quantity}</p>
                </div>
            ))}
        
    </div>
  )
}

export default Ingredient