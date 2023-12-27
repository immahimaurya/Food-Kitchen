/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:41:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    isOpen: false,
    isModalOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export default toggleSlice.reducer;
export const { toggleMenu, toggleModal } = toggleSlice.actions;