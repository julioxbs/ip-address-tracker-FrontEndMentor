import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const createReceivingInfoSlice = createSlice({
    name: 'receivingInfo',
    initialState,
    reducers: {
        create: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});


export const { create } = createReceivingInfoSlice.actions;
export default createReceivingInfoSlice.reducer;