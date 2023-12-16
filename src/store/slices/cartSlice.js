import { createSlice } from '@reduxjs/toolkit';

export const loadCartFromStorage = () => (dispatch) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(setCartItems(storedCart));
};



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: action.payload.quantity || 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        increaseQuantity: (state, action) => {
            const itemIdToIncrease = action.payload;
            const itemToIncrease = state.items.find(item => item.id === itemIdToIncrease);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        decreaseQuantity: (state, action) => {
            const itemIdToDecrease = action.payload;
            const itemToDecrease = state.items.find(item => item.id === itemIdToDecrease);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];

            localStorage.setItem('cart', JSON.stringify(state.items));
        },


    },
});

export const { addItem,removeItem,increaseQuantity, decreaseQuantity ,clearCart,setCartItems } = cartSlice.actions;
export default cartSlice.reducer;