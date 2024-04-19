import { configureStore } from "@reduxjs/toolkit"
import wishlistSlice from "../slice/wishlistSlice"
import cartSlice from "../slice/cartSlice"


configureStore

const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})

export default store