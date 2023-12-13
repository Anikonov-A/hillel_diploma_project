import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import offerSlice from "./slices/offerSlice";
import productsSlice from "./slices/productsSlice";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
    reducer: {
        categories:categoriesSlice,
        offer: offerSlice,
        products:productsSlice,
        category:categorySlice,

    },
});

export default store;