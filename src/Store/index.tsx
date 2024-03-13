import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import loginSlice from "../Slices/loginSlice";
import sidebarShow from "../Slices/sidebarShow";
import { usersApi } from "../Services/user";
import { salesApi } from "../Services/sales";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [salesApi.reducerPath]: salesApi.reducer,
    loginState: loginSlice,
    sidebarShow: sidebarShow,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, salesApi.middleware),
});
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the type of the AppDispatch
export type AppDispatch = typeof store.dispatch;
