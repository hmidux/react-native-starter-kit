import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: { token: null, name : null},
};

export const userSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   firstfonction: (state, action) => {
     state.value.token = action.payload.token;
   },
   secondfonction: (state) => {
    state.value = { token: null, name : null};
  },
 },
});

export const { firstfonction, secondfonction } = userSlice.actions;
export default userSlice.reducer;