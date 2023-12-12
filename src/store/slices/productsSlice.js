import { createSlice } from '@reduxjs/toolkit';
import {fetchDataAsync} from "./categoriesSlice";



const productsSlice = createSlice({
    name: 'products',
    initialState: { data: {}, sortBy: 'random', sortedProducts: [] },
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSortedProducts: (state, action) => {
            state.sortedProducts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataAsync.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const { setSortBy, setSortedProducts } = productsSlice.actions;
export default productsSlice.reducer;