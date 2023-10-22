"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setJoke, setLoading, selectJoke, selectLoading } from '../redux/slice';
import axios from 'axios';

function Jokes() {
  const dispatch = useDispatch();
  const joke = useSelector(selectJoke);
  const loading = useSelector(selectLoading);

  const getJoke = async () => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get('/api/users/jokes');
      if (response.status === 200) {
        dispatch(setJoke(response.data.jokeText));
      } else {
        dispatch(setJoke('Failed to fetch joke. Please try again later.'));
      }
    } catch (error) {
      dispatch(setJoke('An error occurred while fetching the joke.'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="text-xl font-semibold mb-4">Here is a Programming Joke for You!</div>
      <div className="p-4 border border-gray-200 bg-gray-100 rounded-lg mb-4" style={{ height: '130px', overflowY: 'auto' }}>
        {loading ? 'Loading...' : joke}
      </div>
      <button
        className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-700 transition duration-300 ease-in-out"
        onClick={getJoke}
        disabled={loading}
      >
        Get Another Joke
      </button>
    </div>
  );
}

export default Jokes;
