import { createSlice } from '@reduxjs/toolkit';

const initialState = { sLeft: false, sUp: false, eUp: false, eRight: false };

const actionButtonsSlice = createSlice({
    name: 'actionButtons',
    initialState: initialState,
    reducers: {
        updateButtonSLeft: (state, action) => {
            state.sLeft = action.payload;
            // console.log('sLeft = ', action.payload);
            // console.log(state.sLeft ? `s-L: Thrust up activated.` : `s-L: Thrust up off.` );
        },
        updateButtonSUp: (state, action) => {
            state.sUp = action.payload;
            // console.log('sUp = ', action.payload);
            // console.log(state.sUp ? `s-U: Thrust up activated.` : `s-U: Thrust up off.` );
        },
        updateButtonEUp: (state, action) => {
            state.eUp = action.payload;
            // console.log('eUp = ', action.payload);
            // console.log(state.eUp ? `e-U: Thrust up activated.` : `e-U: Thrust up off.` );
        },
        updateButtonERight: (state, action) => {
            state.eRight = action.payload;
            // console.log('eRight = ', action.payload);
            // console.log(state.eRight ? `e-R: Thrust up activated.` : `e-R: Thrust up off.` );
        },
        resetActionButtons: (state) => {
            state = initialState;
        }
    }
});

export const actionButtonsReducer = actionButtonsSlice.reducer;
export const {
    updateButtonSLeft, updateButtonSUp,
    updateButtonEUp, updateButtonERight,
    resetActionButtons
} = actionButtonsSlice.actions;

export const actionButtons = (state) => state.actionButtons;