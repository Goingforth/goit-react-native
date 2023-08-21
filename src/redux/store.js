import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from './reducer';
//import { authReducer } from './auth/reducer';
import { authSlice, authReducer } from './auth/authSlice';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

// const rootReducer = combineReducers({
//     [authSlice.name]: persistReducer(persistConfig, authSlice.reducer),
//     [postSlice.name]: postSlice.reducer,
// });

// const reducer = persistReducer(persistConfig, rootReducer);
// const reducer = persistReducer(persistConfig, authSlice.reducer);
const reducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export default { store, persistor };