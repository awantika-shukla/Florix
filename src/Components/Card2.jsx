import React from 'react'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux'
import { RemoveItem, Icreament, Decreament } from '../redux/CartSlice';
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'  


 function Card2 ({name,id, price, image,qty})  {

  let dispatch=useDispatch()

  return (
    <div className='w-full h-40 bg-red-200 p-2 flex justify-between shadow-2xl rounded-lg border border-red-300'>

      <div className='w-80 h-full bg-white rounded-lg flex gap-5 shadow-xl '>
        <div className='w-50 h-full overflow-hidden rounded-lg '>
            <img src={image} alt="" />
        </div>
    <div className="w-40 flex flex-col gap-4">

  {/* Product Name */}

  <div className="text-base font-semibold text-gray-800 mt-5 ">
    {name}
  </div>

  {/* Quantity Selector */}

  <div className="flex items-center justify-between w-30 h-9 
    bg-red-200/70 backdrop-blur-md 
    border border-red-500 rounded-lg 
    shadow-sm px-2 ">

    <button className="w-7 h-7 flex items-center justify-center 
      rounded-full bg-white hover:bg-pink-900 
      text-pink-900 hover:text-white 
      transition" onClick={() => dispatch(Decreament(id))}  >
      -
    </button>

    <span className="text-sm font-medium text-red-900">
      {qty}
    </span>

    <button className="w-7 h-7 flex items-center justify-center 
      rounded-full bg-white hover:bg-pink-900 
      text-pink-900 hover:text-white 
      transition" onClick={() =>dispatch(Icreament(id))}>
      +
    </button>

  </div>
</div>
      </div>


      <div className='flex flex-col justify-start items-end gap-4 mt-5'>
        <span className='text-lg font-bold text-red-900'>Rs {price}/-</span>
        <RiDeleteBin2Fill className='text-2xl text-red-500 cursor-pointer'
        onClick={() => dispatch(RemoveItem(id))} />
      </div>


    </div>
  )
}

export default Card2
