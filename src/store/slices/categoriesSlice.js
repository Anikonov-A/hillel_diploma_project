import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataAsync = createAsyncThunk('categories/fetchData', async () => {
    try {
        const response = await axios.get('/data/data.json');
        return response.data;
    } catch (error) {
        throw error;
    }
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: { data: {}, randomProducts: [] },
    reducers: {
        setRandomProducts: (state, action) => {
            state.randomProducts = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    },
});

export const { setRandomProducts } = categoriesSlice.actions;
export default categoriesSlice.reducer;