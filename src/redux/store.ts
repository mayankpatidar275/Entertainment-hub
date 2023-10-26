import { configureStore } from '@reduxjs/toolkit';
import jokeReducer from './slice';

const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
});

export default store;
