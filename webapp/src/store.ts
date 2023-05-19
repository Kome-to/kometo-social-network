import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import rootSaga from './saga';
import authSlice from './services/controllers/auth/AuthSlice';
import CommonSlice from './services/controllers/common/CommonSlice';
import userSlice from './services/controllers/user/UserSlice';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware, routerMiddleware(history)];

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router', 'plan', 'auth', 'payment', 'user', 'common', 'project', 'organization', 'milestone'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    router: connectRouter(history),
    auth: authSlice,
    common: CommonSlice,
    user: userSlice,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
