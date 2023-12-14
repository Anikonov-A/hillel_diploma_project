import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
        },
        increaseQuantity: (state, action) => {
            const itemIdToIncrease = action.payload;
            const itemToIncrease = state.items.find(item => item.id === itemIdToIncrease);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIdToDecrease = action.payload;
            const itemToDecrease = state.items.find(item => item.id === itemIdToDecrease);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem,removeItem,increaseQuantity, decreaseQuantity ,clearCart } = cartSlice.actions;
export default cartSlice.reducer;