import { configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import courseReducer from './reducers/courseReducer';

// Create the Redux store using configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    courses: courseReducer,
    // Add more reducers here if needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Use thunk middleware
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
  


});

export default store;