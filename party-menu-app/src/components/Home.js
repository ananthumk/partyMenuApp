import React, { useState } from 'react'
import Header from './Header.js'
import DishesList from './DishesList.js'

const Home = ({ totalDish, setTotalDish, vegCategory,mcCount,dCount, sidesCount, sCount, setdCount,setMcCount, setSidesCount, setsCount, setVeg, nonVegCategory, setNonVeg, category, setCategory}) => {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>
        <Header setSearchQuery={setSearchQuery} mcCount={mcCount} dCount={dCount} sidesCount={sidesCount} sCount={sCount} category={category} setCategory={setCategory} vegCategory={vegCategory} setVeg={setVeg} nonVegCategory={nonVegCategory} setNonVeg={setNonVeg} /> 
        <DishesList searchQuery={searchQuery} totalDish={totalDish} setTotalDish={setTotalDish} setdCount={setdCount} setMcCount={setMcCount} setSidesCount={setSidesCount} setsCount={setsCount} category={category} vegCategory={vegCategory}  nonVegCategory={nonVegCategory}  />
    </div>
  )
}

export default Home