import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0, // Store total price in cents to avoid floating point precision issues
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      
      if (itemIndex !== -1) {
        // If item exists, update the quantity and total price for that item
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price;
      } else {
        // If item doesn't exist, add the new item to the cart
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }

      // Update the total quantity and total price for the entire cart
      state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      
      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        
        // Update total quantity and total price based on the quantity of the item to be removed
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        // Remove the item from the cart
        state.cartItems.splice(itemIndex, 1);
      }
    },
    
    clearCart: (state) => {
      // Reset the entire cart
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
