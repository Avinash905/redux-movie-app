import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  movieData: {},
  loading: true,
  searchText: "avengers",
};

export const getmovies = createAsyncThunk("movies/getmovies", async (url) => {
  try {
    const apiData = await axios.get(url);
    return apiData.data;
  } catch (error) {
    return error;
  }
});

export const getSingleMovie = createAsyncThunk(
  "movies/getSingleMovie",
  async (url) => {
    try {
      const apiData = await axios.get(url);
      return apiData.data;
    } catch (error) {
      return error;
    }
  }
);

export const movieReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    valueChange: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: {
    [getmovies.pending]: (state) => {
      state.loading = true;
    },
    [getmovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    [getmovies.rejected]: (state) => {
      state.loading = false;
    },
    [getSingleMovie.pending]: (state) => {
      state.loading = true;
    },
    [getSingleMovie.fulfilled]: (state, action) => {
      state.movieData = action.payload;
      state.loading = false;
    },
    [getSingleMovie.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default movieReducer.reducer;

export const { valueChange } = movieReducer.actions;
