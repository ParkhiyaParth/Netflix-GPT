import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlaying: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.getNowPlaying = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = movieSlice.actions;

export default movieSlice.reducer;
