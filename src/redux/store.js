import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './slices/ProductSlice';
import cartReducer from './slices/CartSlice';
import userReducer from './slices/UserSlice';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false
    }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);
export default store;