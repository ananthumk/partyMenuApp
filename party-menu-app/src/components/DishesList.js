import  { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { dishes } from '../data/mockDishes';
import DishCard from './DishCard.js';
import arrow from '../assests/RightArrow.png'
import Popup from './Popup.js'
import '../App.css'

const DishesList = ({ searchQuery, totalDish, setTotalDish, setdCount,setMcCount, setSidesCount, setsCount, vegCategory, nonVegCategory, category}) => {
  const [dishData, setDishData] = useState(dishes) // store dishes data
  const [vegSection, setVegSection] = useState('') // select veg category
  const [nonVegSection, setNonVeegSection] = useState('') // select non-veg category
  const [showPopup, setShowPopup] = useState(false) // to show popup 
  const [popupDishId, setPopupDishId] = useState(null) // add popup dish id
 
  // add and remove dish to cart
  const toggleDish = (id) => {
     setDishData(prev => 
      prev.map(dish => 
        dish.id === id ? { ...dish, added: !dish.added} : dish
      )
     )
  }
  
  // increase count based on mealtype
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
  
  // decrease count based on mealtype
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
  
  //Filter data based on search query, veg and non-veg category
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
  
  const currentPopupData = dishData.find(dish => dish.id === popupDishId ) // to get popup dish details

  return (
    <>
    <div className='dishes-list-container'>
      <div className='sub-heading'>
         <h2>North Indian</h2>
         <IoIosArrowDown size={27} />
      </div>
      <div className='dish-card-conatiner'>
         {!filterData.length ? <h2 style={{textAlign: 'center', marginTop: '20px'}}>No Dishes Found</h2> :
         filterData.map(dish => (
            <div onClick={() => {
              setPopupDishId(dish.id)
              
            }}>
            <DishCard key={dish.id} setTotalDish={setTotalDish} handleRemoveCount={handleRemoveCount} 
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
    {showPopup && <Popup setTotalDish={setTotalDish} 
     handleRemoveCount={handleRemoveCount} 
            handleCount={handleCount} 
            toggleDish={toggleDish} 
            setShowPopup={setShowPopup} 
            popupData={currentPopupData} />}
    </>
  )
}

export default DishesList