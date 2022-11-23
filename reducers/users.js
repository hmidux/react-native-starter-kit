import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: { token: null},
};

export const usersSlice = createSlice({
 name: 'users',

  initialState,
 reducers: {
   firstfonction: (state, action) => {
     state.value = action.payload;
   },
 },
});

export const { firstfonction } = usersSlice.actions;
export default usersSlice.reducer;