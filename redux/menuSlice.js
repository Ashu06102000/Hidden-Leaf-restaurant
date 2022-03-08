import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: "cart",
  initialState: {
    menus:[],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addMenu: (state, action) => {
      state.menus.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.menus = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
})

export const {addMenu, reset } = menuSlice.actions;
export default menuSlice.reducer;
