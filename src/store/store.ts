import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import basketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
