import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductsAsync = createAsyncThunk('products/fetchData', async () => {
    try {
        const response = await axios.get('/data/data.json');
        return response.data;
    } catch (error) {
        throw error;
    }
});

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
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const { setSortBy, setSortedProducts } = productsSlice.actions;
export default productsSlice.reducer;