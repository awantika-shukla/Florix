import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";

import { GiButterflyFlower } from "react-icons/gi";
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';
import flowers from '../flower';



function Nav() {
  const [openSearch, setOpenSearch] = useState(false);
  let {input, setInput, cartItems, setCartItems, showCart, setShowCart} = useContext(dataContext)

  useEffect(() => {
  let filtered = flowers;

  if (input.trim() !== "") {
    filtered = flowers.filter((flower) =>
      flower.name.toLowerCase().includes(input.toLowerCase())
    );
  }

  setCartItems(filtered);
}, [input]);

  let items=useSelector(state=>state.cart)

  return (
    <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-12  py-15 pb-20 ">
      <div className=' text-7xl text-pink-900  flex items-center justify-space-around  '>  
        <GiButterflyFlower />
      </div>
      <div className="w-2/3 hidden sm:flex flex-1 mx-4 max-w-xl h-12 rounded-md  items-center px-4 bg-pink-400/20 backdrop-blur-md border border-white/30 shadow-lg">
  
     <form className="w-full h-full flex items-center gap-3"
     onSubmit={(e)=>e.preventDefault()}>
        <CiSearch className="text-pink-700 text-lg"  />
    
        <input type="text" placeholder="Search Flowers....." className="w-full bg-transparent outline-none text-pink-700 placeholder-pink-700/70"
        onChange={(e)=>setInput(e.target.value)} value={input}/>
    </form>
    </div>

    {/* mobile */}

     <div className="sm:hidden flex items-center gap-2">

        <div className={`flex items-center transition-all duration-300 
          ${openSearch ? "w-40 px-3 border border-white/30 bg-white/20 backdrop-blur-md rounded-md" : "w-10 justify-center"}`}>
          
          <CiSearch
            className="text-pink-600 text-4xl  bg-pink-100 rounded-full p-2 hover:bg-pink-200 transition duration-200 cursor-pointer"
            onClick={() => setOpenSearch(!openSearch)}
          />

          {openSearch && (
            <input
              autoFocus
              type="text"
              placeholder="Search Flow....."
              className="ml-3 w-full bg-transparent outline-none text-sm text-pink-700 placeholder-pink-500/70"
            />
          )}
        </div>
      </div>



        <div className=' hover:shadow-pink-200 shadow-xl flex items-center justify-between  relative cursor-pointer' onClick={()=>setShowCart(true)}>
            <span className='absolute top-0 right-0 text-pink-700 text-xs font-semibold'>{items.length}</span>
             <FaOpencart className='text-6xl text-pink-900' />
        
        </div>
    </div>
  )
}

export default Nav
