import { createSlice } from '@reduxjs/toolkit'


export const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        productsList: [],
        product: {},
    },
    reducers: {
        getAllProducts(state, action) {
            state.loading = true;
        },
        setAllProducts(state, action) {
            state.productsList = action.payload;
            state.loading = false;
        },
        getProductById(state, action) {
            state.loading = true;
        },
        setProductById(state, action) {
            //  console.log('productSlice-----', JSON.stringify(action.payload, null, 2));
            state.product = action.payload;
            state.loading = false;
        },
    },
})

export const { getAllProducts, setAllProducts, getProductById, setProductById } = ProductSlice.actions;

export default ProductSlice.reducer