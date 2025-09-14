import React, { use, useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { dishes } from '../data/mockDishes';
import DishCard from './DishCard.js';
import arrow from '../assests/RightArrow.png'
import Popup from './Popup.js'
import '../App.css'

const DishesList = ({ searchQuery, totalDish, setTotalDish, setdCount,setMcCount, setSidesCount, setsCount, vegCategory, nonVegCategory, category}) => {
  const [dishData, setDishData] = useState(dishes)
  const [vegSection, setVegSection] = useState('')
  const [nonVegSection, setNonVeegSection] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState({})

  const toggleDish = (id) => {
     setDishData(prev => 
      prev.map(dish => 
        dish.id === id ? { ...dish, added: !dish.added} : dish
      )
     )
  }

  const handleCount = (value) => {
     if(value === 'SIDES') {
       setSidesCount(prevDetails => prevDetails + 1)
     }else if(value === 'MAIN COURSE'){
      setMcCount(prevDetails => prevDetails + 1)
     }else if(value === 'STARTER'){
      setsCount(prevDetails => prevDetails + 1)
     }else if(value === 'DESSERT'){
      setdCount(prevDetails => prevDetails + 1)
     }
  }

  const handleRemoveCount = (value) => {
     if(value === 'SIDES') {
       setSidesCount(prevDetails => prevDetails - 1)
     }else if(value === 'MAIN COURSE'){
      setMcCount(prevDetails => prevDetails - 1)
     }else if(value === 'STARTER'){
      setsCount(prevDetails => prevDetails - 1)
     }else if(value === 'DESSERT'){
      setdCount(prevDetails => prevDetails - 1)
     }
  }

  useEffect(() => {
    setVegSection(vegCategory ? 'VEG': '')
    setNonVeegSection(nonVegCategory ? 'NON-VEG': '')
  }, [vegCategory, nonVegCategory])

  const filterData = dishData.filter(data => {
    if(!vegSection && !nonVegSection){
      if(searchQuery){
        return (
          data.mealType === category && 
          data.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      return data.mealType === category
    }

    if(searchQuery){
      return (
        (data.type === vegSection || data.type === nonVegSection) && data.mealType === category && 
        data.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return (
      (data.type === vegSection || data.type === nonVegSection) && data.mealType === category
    )
  })
  return (
    <>
    <div className='dishes-list-container'>
      <div className='sub-heading'>
         <h2>North Indian</h2>
         <IoIosArrowDown size={27} />
      </div>
      <div className='dish-card-conatiner'>
         {filterData.map(dish => (
            <div onClick={() => {
              setPopupData(dish)
            }}>
            <DishCard setTotalDish={setTotalDish} handleRemoveCount={handleRemoveCount} 
            handleCount={handleCount} dish={dish} setShowPopup={setShowPopup} toggleDish={toggleDish} />
            </div>
         ))}
      </div>
      <div className='footer-section'>
          <div className='footer-section1'>
            <div className='fs12'>
            <p>Total dish selected</p>
            <p>{totalDish}</p></div>
            <img src={arrow} alt='right-arrow' className='right-arrow' />
          </div>
          <div className='footer-section2'>
            <button className='continue-btn'>
              Continue
              </button>
          </div>
      </div>
    </div>
    {showPopup && <Popup setTotalDish={setTotalDish}  handleRemoveCount={handleRemoveCount} 
            handleCount={handleCount} toggleDish={toggleDish} setShowPopup={setShowPopup} popupData={popupData} />}
    </>
  )
}

export default DishesList