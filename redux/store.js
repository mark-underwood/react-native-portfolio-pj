import { configureStore } from '@reduxjs/toolkit';
import { leaderboardReducer } from '../features/leaderboard/leaderboardSlice';
import { actionButtonsReducer } from '../components/actionButtons/actionButtonsSlice';
// impore reducers from relevant xSlice

export const store = configureStore({
    reducer: {
        leaderboard: leaderboardReducer,
        actionButtons: actionButtonsReducer
    }
});