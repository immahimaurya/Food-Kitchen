/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:38:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import locationReducer from './locationSlice';
import toggleReducer from './toggleSlice';

const appStore = configureStore({
  reducer: {
    cartData: cartReducer,
    locationData: locationReducer,
    toggleData: toggleReducer,
  },
});

export default appStore;