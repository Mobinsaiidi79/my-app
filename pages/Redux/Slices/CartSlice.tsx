import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  stock: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  error: null,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        if (existingItem?.quantity < existingItem.stock) {
          existingItem.quantity++;
          state.error = null;
        } else {
          state.error = "No more stock available";
        }
      } else {
        if (newItem.stock > 0) {
          state.items.push({
            ...newItem,
            quantity: 1,
          });
          state.error = null;
        } else {
          state.error = "موجودی این محصول صفر است.";
        }
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else if (existingItem) {
        existingItem.quantity--;
      }

      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.error = null;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
