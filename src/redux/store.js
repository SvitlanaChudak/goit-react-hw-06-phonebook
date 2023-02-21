import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './filterSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});
