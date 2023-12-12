import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOfferDataAsync = createAsyncThunk('offer/fetchData', async () => {
    try {
        const response = await axios.get('/data/data.json');
        return response.data;
    } catch (error) {
        throw error;
    }
});

const offerSlice = createSlice({
    name: 'offer',
    initialState: { data: {}, selectedCategory: {}, categoryData: [], loading: true },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setCategoryData: (state, action) => {
            state.categoryData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOfferDataAsync.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchOfferDataAsync.fulfilled, (state, action) => {
            state.data = action.payload;
            const randomCategory = action.payload.categories[Math.floor(Math.random() * action.payload.categories.length)];
            state.selectedCategory = randomCategory;

            if (randomCategory) {
                const shuffledCategoryData = randomCategory.items.sort(() => Math.random() - 0.5);
                state.categoryData = shuffledCategoryData.slice(0, 4);
            }

            state.loading = false;
        });
        builder.addCase(fetchOfferDataAsync.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setSelectedCategory, setCategoryData } = offerSlice.actions;
export default offerSlice.reducer;