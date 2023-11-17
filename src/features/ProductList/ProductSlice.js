import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct } from './ProductAPI';

const initialState = {
  products: [],
  status: 'idle',
};


export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProduct',
  async () => {
    const response = await fetchAllProduct();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
 
  reducers: {
    increment: (state) => {
    
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;

export const selectAllproducts = (state) => state.product.products;



export default productSlice.reducer;
