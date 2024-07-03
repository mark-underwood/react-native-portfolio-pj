import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { baseUrl } '../../shared/baseUrl';

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: { userName: '', gameTimeSeconds: 0, leaderboardArray: [] },
    reducers: {}
    // extraReducers: () => 
});

export const leaderboardReducer = leaderboardSlice.reducer;