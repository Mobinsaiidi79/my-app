import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import CommentSlice from "./Slices/commentSlice";
import ProductSlice from "./Slices/productSlice";

const store = configureStore({
  reducer: {
    Cart: CartSlice,
    Comments: CommentSlice,
    Products: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
