import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalCartItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
      state.totalCartItems++;
      state.totalPrice += action.payload.price;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.totalCartItems--;
        state.totalPrice -= item.price;
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const updatedCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      const removedItem = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (!removedItem) {
        console.warn(`Item with id ${action.payload.id} not found in cart`);
        return state;
      }
      const updatedTotalCartItems = state.totalCartItems - removedItem.quantity;
      const updatedTotalPrice =
        state.totalPrice - removedItem.price * removedItem.quantity;
      const updatedState = {
        ...state,
        cart: updatedCart,
        totalCartItems: updatedTotalCartItems,
        totalPrice: updatedTotalPrice,
      };
      localStorage.setItem(CART_KEY, JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const {addItem, removeItem, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
