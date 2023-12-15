import { createSlice} from '@reduxjs/toolkit';
import {fetchDataAsync} from "./categoriesSlice";


const offerSlice = createSlice({
    name: 'offer',
    initialState: { data: {}, selectedCategory: {}, categoryData: [] },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setCategoryData: (state, action) => {
            state.categoryData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataAsync.fulfilled, (state, action) => {
            state.data = action.payload;
            const randomCategory = action.payload.categories[Math.floor(Math.random() * action.payload.categories.length)];
            state.selectedCategory = randomCategory;

            if (randomCategory) {
                const shuffledCategoryData = [...randomCategory.items].sort(() => Math.random() - 0.5);
                state.categoryData = shuffledCategoryData.slice(0, 4);
            }
        });
    },
});

export const { setSelectedCategory, setCategoryData } = offerSlice.actions;
export default offerSlice.reducer;