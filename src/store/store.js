import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";
import moviesReducer from "./slices/movies";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    movies: moviesReducer,
  },
});

export default store;
