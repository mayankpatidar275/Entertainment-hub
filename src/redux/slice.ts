import { createSlice } from '@reduxjs/toolkit';

const jokeSlice = createSlice({
  name: 'joke',
  initialState: {
    jokeText: '',
    loading: false,
  },
  reducers: {
    setJoke: (state, action) => {
      state.jokeText = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setJoke, setLoading } = jokeSlice.actions;

export const selectJoke = (state: any) => state.joke.jokeText;
export const selectLoading = (state: any) => state.joke.loading;

export default jokeSlice.reducer;
