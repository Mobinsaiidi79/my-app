import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const updatedProduct = action.payload;
      const existingIndex = state.products.findIndex(
        (p) => p.id === updatedProduct.id
      );
      if (existingIndex !== -1) {
        state.products[existingIndex] = updatedProduct;
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setProducts, addProduct, updateProduct, removeProduct } =
  ProductSlice.actions;
export default ProductSlice.reducer;
