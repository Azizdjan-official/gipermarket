import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { addProduct, removeProduct, setCount, totalPrice } from "./productReducer";

const storageMiddleWare = createListenerMiddleware();

storageMiddleWare.startListening({
  matcher: isAnyOf(addProduct, removeProduct),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(setCount());
  },
});

export { storageMiddleWare };