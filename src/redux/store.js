import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; 
//import { persistStore } from 'redux-persist';
//import persistedReducer from './rootReducer';
// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
  
export const store = configureStore({
    reducer: rootReducer,          //persistedReducer
    //middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});

//export const persistor = persistStore(store);
