import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //actions
        //function to add items to cart
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //function to remove items from cart
        removeFromCart :(state,action)=>{
           return state.filter(item=>item.id !=action.payload)
        },
        //function to empty the cart
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const{addToCart,removeFromCart,emptyCart}=cartSlice.actions

export default cartSlice.reducer