import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TaksSliceState } from "./slice";
import { taskstSlice } from './slice';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ConfigureStoreOptions {
    reducer: any;
    preloadedState: any;
    devTools: boolean;
    middleware: any;
};

const persistconfig = {
    key: 'tasks',
    storage: AsyncStorage,
    whitelist: ['tasks'],
};

export interface RootState {
    tasks: TaksSliceState;
};

const rootReducer = combineReducers({
    tasks: taskstSlice.reducer,
});

const persistedReducer = persistReducer(persistconfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store
