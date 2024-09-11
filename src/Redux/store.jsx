import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlices'; // Make sure the path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer to the store
  },
});

export default store;
