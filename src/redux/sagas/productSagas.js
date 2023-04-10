import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchProducts, fetchProductsById } from "../api";
import { getAllProducts, setAllProducts, getProductById, setProductById } from "../slices/ProductSlice";

function* fetchProductsList() {
    try {
        const response = yield call(fetchProducts);
        if (response.status === 200) {
            yield put(setAllProducts(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

function* fetchProductDetails(action) {
    const productId = action.payload.productId;
    try {
        const response = yield call(fetchProductsById, productId);
        if (response.status === 200) {
            yield put(setProductById(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

function* onLoadProduct() {
    yield takeLatest(getAllProducts.type, fetchProductsList);
    yield takeLatest(getProductById.type, fetchProductDetails);
}

export const productSagas = [fork(onLoadProduct)];

