import React, { useState } from 'react'
import { FaDollarSign, FaStar } from 'react-icons/fa'
import fooditems from './datas/Food-data'
const FoodItems = ({Delivery,Rating}) => {
  const filtering = Delivery ? 
  fooditems
    .filter(fooditem => fooditem.Deliveryfees <= Delivery)
    .sort((a, b) => a.Deliveryfees - b.Deliveryfees) :
  fooditems;
  const filtered=Rating?filtering.filter((filter)=>filter.Rating<=Rating):filtering;
  return (
    <div className=' lg:px-24 px-2 grid grid-cols-3 gap-6'>
      {
        filtered.map((fooditem)=>(
        <div className=' rounded-xl p-1 flex flex-col gap-1 shadow-black hover:shadow-xl cursor-pointer'>
            <img src={fooditem.Image} alt="FoodMenu" className=' rounded-xl h-60'/>
            <h4 className=' text-lg font-semibold'>{fooditem.Name}</h4>
            <div className=' text-gray-500 flex items-center gap-2 font-medium'>
                <span className=' flex items-center gap-1 '>{fooditem.Rating} <FaStar /></span>
                <span className=' w-1 h-1 bg-gray-500 rounded-full'></span>
                <span>{fooditem.miles}mi</span>
                <span className=' w-1 h-1 bg-gray-500 rounded-full'></span>
                <span>{fooditem.minutes}min</span>
            </div>
            <div className=' text-gray-500 font-medium'>
                <span className=' flex items-center gap-1'><FaDollarSign/>{fooditem.Deliveryfees} delivery fees</span>
            </div>
        </div> 
      ))
      }
      <div className={`${filtered.length===0?"block":"hidden"} w-[50rem] justify-center items-center text-5xl text-gray-400 font-extralight`}>
        Filtered Item not founded...
      </div>
    </div>
  )
}

export default FoodItems