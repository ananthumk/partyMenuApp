import React from 'react'
import arrow from '../assests/leftArrow.png'
import image from '../assests/ingredientBg.png'
import { useParams } from 'react-router-dom'
import { dishes } from '../data/mockDishes'
import { useNavigate } from 'react-router-dom'

const Ingredient = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    console.log(id)
    const data = dishes?.find(dish => dish.id === Number(id))
  return (
    <div className='ingredient-container'>
        <div className='ingedient-header'>
            <img onClick={() => navigate('/')} src={arrow} alt='back-arrow' />
            <h2>Ingredient List</h2>
        </div>
        <div style={{marginTop: '10px'}} className='ingredient-details-container'>
            <div className='i-details-section'>
                <h2>{data?.name}</h2>
                <p>{data?.description}</p>
            </div>
            <img src={image} alt='bgimage' className='bgImage' />
        </div>
        <hr />
        
            {data?.ingredients?.map((ingredient, index) => (
                <div className='ingredient-sections' key={index}>
                <p>{ingredient.name}</p>
                <p>{ingredient.quantity}</p>
                </div>
            ))}
        
    </div>
  )
}

export default Ingredient