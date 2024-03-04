import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../Axois/instance";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ currentPage, searchQuery }, { rejectWithValue }) => {
    try {
      let url = "/movie/popular";
      const params = {
        page: currentPage,
      };
      if (searchQuery) {
        url = "/search/movie";
        params.query = searchQuery;
      }
      const response = await instance.get(url, { params });
      console.log(response.data.total_pages);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  movies: [],
  loading: false,
  error: null,
  totalPages: 0, // Add totalPages to the initial state
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
      state.totalPages = action.payload.total_pages;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default moviesSlice.reducer;
