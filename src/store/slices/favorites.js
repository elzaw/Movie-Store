import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },

    removeFromFavorites: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
