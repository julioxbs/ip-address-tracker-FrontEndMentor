import { configureStore } from "@reduxjs/toolkit";
import receivingInfoSlice from './features/receivingInfoSlice';

export const store = configureStore({
    reducer: {
        receivingInfo: receivingInfoSlice,
    }
});

export default store;