import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { counterSlice } from "./counterSlice";
import { postSlice } from "./postSlice";

const combinedReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [postSlice.name]: postSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // old client-side state
      ...action.payload, // state from server
    };
  }
  return combinedReducer(state, action); // all other actions
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const wrapper = createWrapper(makeStore);
