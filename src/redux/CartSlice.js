import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addToCart:(state, action) => {
            let existingItem = state.find((item) => item.id === action.payload.id);
            if(existingItem){
                existingItem.qty += 1;
                return;
            }
            else{
                state.push(action.payload)
            }
        },
        RemoveItem:(state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        Icreament:(state, action) => {
            let existingItem = state.find((item) => item.id === action.payload);
            if(existingItem){
                existingItem.qty += 1;
            }   
        },

        Decreament:(state, action) => {
            let existingItem = state.find((item) => item.id === action.payload);
            if(existingItem && existingItem.qty > 1){
                existingItem.qty -= 1;
            }
                else if(existingItem && existingItem.qty === 1){
                    return state.filter((item) => item.id !== action.payload)
                }   


        }    }

})

export const {addToCart, RemoveItem, Icreament, Decreament} = CartSlice.actions
export default CartSlice.reducer
