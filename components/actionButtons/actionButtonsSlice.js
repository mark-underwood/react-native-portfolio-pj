import { createSlice } from '@reduxjs/toolkit';

const initialState = { actionButtons: {
    sLeft: false, sUp: false, eUp: false, eRight: false }
};

const actionButtonsSlice = createSlice({
    name: 'actionButtons',
    initialState: initialState,
    reducers: {
        updateButtonSLeft: (state, action) => {
            state.actionButtons.sLeft = action.payload;
            console.log('sLeft = ', action.payload);
            // console.log(state.sLeft ? `s-L: Thrust up activated.` : `s-L: Thrust up off.` );
        },
        updateButtonSUp: (state, action) => {
            state.actionButtons.sUp = action.payload;
            console.log('sUp = ', action.payload);
            // console.log(state.sUp ? `s-U: Thrust up activated.` : `s-U: Thrust up off.` );
        },
        updateButtonEUp: (state, action) => {
            state.actionButtons.eUp = action.payload;
            console.log('eUp = ', action.payload);
            // console.log(state.eUp ? `e-U: Thrust up activated.` : `e-U: Thrust up off.` );
        },
        updateButtonERight: (state, action) => {
            state.actionButtons.eRight = action.payload;
            console.log('eRight = ', action.payload);
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

export const { sLeft, sUp, eUp, eRight } = (state) => state.actionButtons;