import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategoryDataAsync = createAsyncThunk('category/fetchData', async () => {
    try {
        const response = await axios.get('/data/data.json');
        return response.data;
    } catch (error) {
        throw error;
    }
});

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
        builder.addCase(fetchCategoryDataAsync.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

export const { setSortBy, setSortedProducts } = categorySlice.actions;
export default categorySlice.reducer;
