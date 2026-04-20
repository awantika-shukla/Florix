import React from 'react'
import { createContext, useState } from 'react';
import flowers from '../flower'

export const dataContext = createContext();

function UserContext({ children }) {

    let [cartItems, setCartItems] = useState(flowers)
    let [input, setInput] = useState("")
    let [showCart, setShowCart] = useState(false)
    let data={
        input,
        setInput,
        cartItems,
        setCartItems,
        showCart,
        setShowCart

    }
  return (
    <div>
        <dataContext.Provider value={data}>
      {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext
