import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';

function Cards({ id,image, name, price }) {
  let dispatch=useDispatch()

  return (
    <div className='w-60 h-100 bg-white p-4 rounded-lg shadow-xl flex flex-col border-2 border-pink-200 gap-1 hover:scale-110 transition duration-300'>
      <div className='w-full h-60% rounded-lg overflow-hidden '>
        <img src={image} alt={name}  className='object-cover' />
      </div>
      <div className='text-xl font-semibold text-pink-900'>
        {name}
      </div>
      <div className='w-full text-pink-900 '>
        Rs{price}/-
      </div>

      <div>
        <button className='w-full h-10 mt-3 flex justify-center items-center bg-pink-100 rounded-sm text-pink-900 hover:bg-red-400 hover:text-black ' 
        onClick={() => {dispatch(addToCart({ id, image, name, price, qty: 1 }));

        toast("Item added to cart 🛒")}}>Add to Cart</button>
      </div>

    </div>
  )
}

export default Cards
