import React, { useState } from 'react'
import image from '../../../assests/Items/empty-cart.png'
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MdCurrencyRupee, MdDeleteForever} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {IncreaseFoodQuantity,DecreaseFoodQuantity} from '../../Redux-Data/Reducer'
const FoodCart = () => {
  const {foodcart}=useSelector((state)=>state.reducerAction);
  const {totalCartAmount}=useSelector((state)=>state.reducerAction);
  const[total,settotal]=useState(0)
  const dispatch = useDispatch()
  const Increase=(tempList)=>{
      const temp={
        id:tempList.id,
        Price:tempList.Price
      }
      dispatch(IncreaseFoodQuantity(temp));
  }
  const Decrease=(tempList)=>{
      const temp={
        id:tempList.id,
        Price:tempList.Price
      }
      console.log(temp);
      dispatch(DecreaseFoodQuantity(temp));
  }
  return (
    <div className=' flex justify-center'>
      {
        foodcart.length===0?
        <div className={` w-full min-h-[38rem]  bg-no-repeat  bg-center `} style={{backgroundImage:`url(${image})`}}>
            <h1 className=' text-center text-3xl font-semibold italic text-gray-500 py-10'>Your Food Cart is Empty...🙃</h1>
        </div>
        :
        <div className=' w-3/4 mt-9 py-5 rounded-lg shadow shadow-gray-400 h-[35rem]'>
          <h1 className=' text-center text-3xl font-medium text-gray-900 pb-5'>Your's Added Food Items</h1><hr/>
          <div className=' h-[23rem] overflow-auto'>
            {
            foodcart.map((tempList)=>(
              <div>
                <div className=' flex items-center justify-between px-10 py-5 flex-wrap'>
                <div className='w-full  md:w-fit  text-white flex gap-5'>
                  <div className=' flex items-center flex-col justify-center w-full bg-gray-100 rounded-lg md:w-fit '>
                    <img src={tempList.Image} alt="foods" height={150} width={150} className=' rounded-xl'/>
                    <div className=' flex gap-3 items-center justify-center py-3'>
                      <button type="button" disabled={tempList.Quantity===1?true:false} className=' disabled:opacity-75'><FaMinus size={25} className=' bg-primary p-1 rounded-md' onClick={()=>{Decrease(tempList)}} /></button>
                      <span className=' text-xl text-black font-semibold'>{tempList.Quantity}</span>
                      <button type="button"><FaPlus size={25} className=' bg-primary p-1 rounded-md' onClick={()=>{Increase(tempList)}}/></button>
                    </div>
                  </div>
                  <div className=' text-black sm:flex flex-col gap-1 justify-center hidden '>
                    <h1 className=' text-2xl font-semibold'>{tempList.Name}</h1>
                    <span className=' text-lg'>{tempList.KeyName}</span>
                    <span className=' text-lg'>Deliveried in {tempList.Minutes} Minutes</span>
                    <span className=' text-lg'>DeliveryFees ${tempList.Deliveryfees}</span> 
                  </div>
                </div>
                <div className=' flex items-center justify-between  md:w-1/4 w-full'>
                  <div className=' flex items-center justify-center'>
                    <MdCurrencyRupee size={45} className=' text-primary'/>
                    <span className=' text-4xl font-medium'>{tempList.Price}</span>
                  </div>
                  <div>
                    <MdDeleteForever size={30} className=' text-primary cursor-pointer'/>
                  </div>
                </div>
                </div>
                <hr/>
              </div>
              ))
            }
          </div>
          <hr/>
          <div className=' flex justify-between items-center px-10 py-9'>
            <div className=' flex'>
              <span className=' flex text-2xl font-medium items-center'>Total:<MdCurrencyRupee size={25} className=' text-primary'/>{total}</span>
            </div>
            <button type="submit" className=' text-2xl text-white bg-primary rounded-full px-3 py-1 hover:opacity-90'>Order Now</button>
          </div>
        </div>
      }
    </div>
  )
}

export default FoodCart