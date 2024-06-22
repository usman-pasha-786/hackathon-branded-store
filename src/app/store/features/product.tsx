import {createSlice } from '@reduxjs/toolkit'
import { Product } from '@/app/utils/types';
import Products from '@/app/utils/mock';

const initialState:Product[] = Products;

const productSlice= createSlice({
  name:'product',
  initialState,
  reducers:{}
});

export const {} = productSlice.actions;

export default productSlice.reducer