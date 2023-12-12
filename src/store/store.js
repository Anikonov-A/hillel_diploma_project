import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './slices/categoriesSlice';
import offerSlice from "./slices/offerSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
    reducer: {
        categories:categoriesSlice,
        offer: offerSlice,
        products:productsSlice,
        category:categoriesSlice,

    },
});

export default store;