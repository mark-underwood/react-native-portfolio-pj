import { configureStore } from '@reduxjs/toolkit';
// impore reducers from relevant xSlice

export const store = configureStore({
    reducer: {
        thang: thangReducer,
        thangTwo: thangTwoReducer
    }
});