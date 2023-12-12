import { createSlice} from '@reduxjs/toolkit';
import {fetchDataAsync} from "./categoriesSlice";


const categorySlice = createSlice({
    name: 'category',
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

export const { setSortBy, setSortedProducts } = categorySlice.actions;
export default categorySlice.reducer;
