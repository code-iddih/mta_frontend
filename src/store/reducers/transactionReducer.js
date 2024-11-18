import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: { list: [] },
  reducers: {
    setTransactions(state, action) {
      state.list = action.payload;
    },
    addTransaction(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const { setTransactions, addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
