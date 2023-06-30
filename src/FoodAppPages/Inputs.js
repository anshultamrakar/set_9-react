import React from 'react'
import { useContext } from 'react'
import { FoodContext } from '../Context/FoodContext'

const Inputs = () => {
    const {setIsVeg , isVeg , isSpicy , setIsSpicy , search , setSearch , selectedOption , setSelectedOption} = useContext(FoodContext)
   
  return (
    <div>
           <div className='forms_inputs'>
            <label htmlFor='search'>Search</label>
            <input id = "search" type = "text" placeholder='Search' value = {search} onChange={(e) => setSearch(e.target.value)} />
            <input id = "veg" type = "checkbox" defaultChecked = {isVeg} value = {isVeg} onChange={() => setIsVeg(!isVeg)}/>
            <label htmlFor='veg'>Veg</label>
            <input id = "veg" type = "checkbox" defaultChecked = {isSpicy} value = {isSpicy} onChange={() => setIsSpicy(!isSpicy)}/>
            <label htmlFor='spicy'>Spicy  </label>
            <input  type = "radio" value = "option1" checked = { selectedOption === "option1"} onChange={(e) => setSelectedOption(e.target.value)}/>
            <label >Sort (Price) low to high </label>
            <input type = "radio" value = "option2" checked = { selectedOption === "option2"} onChange={(e) => setSelectedOption(e.target.value)}/>
            <label>Sort (Price) high to low </label>
        </div>
    </div>
  )
}

export default Inputs