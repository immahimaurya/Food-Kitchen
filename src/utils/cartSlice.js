/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:39:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.items = state?.items?.filter(
        (card) => card?.card?.info?.id !== itemId
      );
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, deleteItem } = cartSlice.actions;