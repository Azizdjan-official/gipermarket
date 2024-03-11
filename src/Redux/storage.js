import { configureStore } from "@reduxjs/toolkit";

import { storageMiddleWare } from "./middleware";
import { saveState } from "../storage/storage";
import productReducer from './productReducer';

export const store = configureStore({
  reducer: {
    productReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleWare.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().productReducer);
});