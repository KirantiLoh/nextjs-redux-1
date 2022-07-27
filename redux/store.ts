import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    Reducer,
    ThunkAction,
  } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'
import modalReducer from './slices/modalSlice'
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
    cart: cartReducer,
    modal: modalReducer,
})

const reducer: typeof combinedReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(makeStore, { debug: true });