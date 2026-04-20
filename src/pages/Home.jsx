
import React, { useState } from 'react'

import Nav from '../Components/Nav'
import categories from '../categories'
import Cards from '../Components/Cards'
import flowers from '../flower'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross1 } from "react-icons/rx";
import Card2 from '../Components/Card2';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
  let{cartItems, setCartItems, input, showCart, setShowCart} = useContext(dataContext)
  
  

  function filterCategory(category) {
  let filtered = flowers;

  if (category !== "All") {
    filtered = filtered.filter((flower) => flower.category === category);
  }

  if (input.trim() !== "") {
    filtered = filtered.filter((flower) =>
      flower.name.toLowerCase().includes(input.toLowerCase())
    );
  }

  setCartItems(filtered);
}

  let items=useSelector(state=>state.cart)
  
  let Subtotal = items.reduce((total, item) => total + item.price * item.qty, 0);
  let deliveryCharge = Subtotal>0 ? 50 : 0;
  let taxes = Subtotal > 0 ? Subtotal * 5/100 : 0;
  let total = Subtotal + deliveryCharge + taxes;
   
  

  return (
    <div className='bg-white min-h-screen w-full'>
      <Nav/>
      
      <div className='flex flex-wrap justify-center items-center gap-12 '>
        {categories.map((category) => {
            return <div className='w-24 h-32  bg-pink-100 flex flex-col items-center rounded-b-full   gap-3 p-3 shadow-xl hover:shadow-pink-200 hover:bg-white transition-shadow duration-200 cursor-pointer  ' 
            onClick={() => filterCategory(category.name)} >
                    {category.name}
                    {category.icon}
                   

                </div>
        })}
      </div>




      <div className='w-full flex flex-wrap gap-5 justify-center items-center mt-13 mb-10'>

      {cartItems.length === 0 ? (
        <div className='w-full h-40 flex flex-col justify-center items-center gap-3'>
          <span className='text-pink-900 text-lg font-medium'>No Flowers Found</span>
          <span className='text-pink-900 text-sm'>Try searching for something else</span>
        </div>
      ) : (
        cartItems.map((flower) => (
          <Cards 
            key={flower.id}
            id={flower.id} 
            image={flower.image} 
            name={flower.name} 
            price={flower.price} 
          />
        ))
      )}

    </div>

    {/* cart */}


      <div className={` w-full sm:w-[80%] md:w-[50%] lg:w-[35%] xl:w-[30%] fixed top-0 right-0 h-full bg-red-100 p-5 shadow-2xl
          transform transition-all duration-500 ease-in-out 
          overflow-auto
          ${showCart ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>

        <header className='w-full flex justify-between items-center '>
      <span className='text-pink-950 text-[18px] font-semifold  '>Order Flowers</span>
      <RxCross1  className='text-pink-950 text-[24px] cursor-pointer ' onClick={() => setShowCart(false)}/>
        </header>

        <div className='w-full mt-8 flex flex-col gap-5'>
          {items.length === 0 ? (
            <div className='w-full h-40 flex flex-col justify-center items-center gap-3'>
              <span className='text-pink-900 text-lg font-medium'>Your cart is empty</span>
              <span className='text-pink-900 text-sm'>Add some flowers to your cart</span>
            </div>  

          ) :(
          items.map((item) => (
            <Card2 
               
              id={item.id}  
             name={item.name} price={item.price} image={item.image} 
            qty={item.qty}/>
          ))
          )}
        </div>

        {items.length > 0 && (
          <>

        {/* Prices */}

        <div className='w-full border-t-2 border-b-2 border-red-400 mt-4 *
        flex flex-col gap-2 p-4 '>
          <div className='w-full flex justify-between items-center text-pink-900 font-semibold text-md'>
            <span>SubTotal</span>
            <span>Rs {Subtotal.toFixed(2)}/-</span>
          </div>

          <div className='w-full flex justify-between items-center text-pink-900 font-semibold text-md'>
            <span>Delivery Charges</span>
            <span>Rs {deliveryCharge.toFixed(2)}/-</span>
          </div>

          <div className='w-full flex justify-between items-center text-pink-900 font-semibold text-md'>
            <span>Taxes</span>
            <span>Rs {taxes.toFixed(2)}/-</span>
          </div>

        </div>
        <div>
           <div className='w-full flex justify-between items-center text-pink-900 font-bold text-lg'>
            <span>Total</span>
            <span>Rs {total.toFixed(2)}/-</span>
        </div>
        
       

        <div className='w-full flex flex-col justify-center items-center mt-5'>
        <button className='w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-600 transition-colors duration-200 mt-4
        ' onClick={()=>toast("Proceeding to checkout 🛒")}>
          Proceed to Checkout
        </button>
      </div>
        </div>
          </>
        )}
      </div>

    </div>

    
  )
}   


export default Home
