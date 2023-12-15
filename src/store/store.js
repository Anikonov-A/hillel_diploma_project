import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import offerSlice from "./slices/offerSlice";
import productsSlice from "./slices/productsSlice";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        categories:categoriesSlice,
        offer: offerSlice,
        products:productsSlice,
        category:categorySlice,
        cart:cartSlice,

    },
});

export default store;