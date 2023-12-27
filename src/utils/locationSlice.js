/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:40:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    userLocation: null || JSON.parse(localStorage.getItem('UserLocation')),
  },
  reducers: {
    getLocation: (state, action) => {
      state.userLocation = action.payload;
      localStorage.setItem('UserLocation', JSON.stringify(state.userLocation));
    },
  },
});

export default locationSlice.reducer;
export const { getLocation } = locationSlice.actions;