import {configureStore} from "@reduxjs/toolkit"
import {userApi} from "./services/Userapi.js"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "./actions/auth/authSlice.js"
import navReducer from "./actions/navSlice.js"
import userReducer from "./actions/userSlice.js"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','user'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  nav:navReducer,
  user:userReducer,
  [userApi.reducerPath]: userApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false})
        .concat(userApi.middleware),    
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);