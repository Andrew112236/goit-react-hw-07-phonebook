import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactSliceReducer } from '../Redux/contactSlice';
import filterSliceReducer from '../Redux/FilterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['phoneBookMark', 'filter'],
};

const rootReducer = combineReducers({
  phoneBookMark: contactSliceReducer,
  filter: filterSliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
