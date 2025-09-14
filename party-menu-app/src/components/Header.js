import React, { useState } from 'react'
import arrow from '../assests/leftArrow.png'
import searchImg from '../assests/search.png'
import veg from '../assests/veg.png'
import nonVeg from '../assests/nonVeg.png'
import '../App.css'

const Header = ({vegCategory, setSearchQuery, mcCount, dCount, sidesCount, sCount, setVeg, nonVegCategory, setNonVeg, category, setCategory}) => {
   

   const handleCategory = (value) => {
     if (value === 'veg'){
      setVeg(prevState => !prevState)
     }
     if (value === 'nonveg'){
      setNonVeg(prevState => !prevState)
     }
   }
  return (
    <div className='header-container'>
         <div className='search-container'>
             <img src={arrow} alt='left-arrow' />
             <input type='search' onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search dishes for your party....' />
             <img src={searchImg} alt='search-icon' />
         </div>
         <div className='category-container'>
             <div onClick={() => setCategory('STARTER')} className={`category-btn ${category === 'STARTER' && 'active-category-btn'}`}>
                <p>Starter<span>{sCount}</span></p>
             </div>
             <div onClick={() => setCategory('MAIN COURSE')} className={`category-btn ${category === 'MAIN COURSE' && 'active-category-btn'}`}>
                <p>Main Course<span>{mcCount}</span></p>
             </div>
             <div onClick={() => setCategory('DESSERT')} className={`category-btn ${category === 'DESSERT' && 'active-category-btn'}`}>
                <p>Desert<span>{dCount}</span></p>
             </div>
             <div onClick={() => setCategory('SIDES')} className={`category-btn ${category === 'SIDES' && 'active-category-btn'}`}>
                <p>Sides<span>{sidesCount}</span></p>
             </div>
         </div>
         <div className='filter-container'>
            <h2>Main Courses Selected<span>(0)</span></h2>
            <div className='btns-slide-container'>
               <div>
                
                  <p className={`${!vegCategory ? 'button-slide' : 'active-button-slide veg-slide'}`}></p>
                  <img onClick={() => handleCategory('veg')} src={veg} className={`${vegCategory ? 'active-icons' : 'icons'}`} alt='veg' />
               </div>
               <div>
                  <p className={`${!nonVegCategory ? 'button-slide' : 'active-button-slide non-veg-slide'}`}></p>
                  <img onClick={() => handleCategory('nonveg')} src={nonVeg} className={`${nonVegCategory ? 'active-icons' : 'icons'}`} alt='non-veg' />
               </div>
            </div>
         </div>
    </div>
  )
}

export default Header