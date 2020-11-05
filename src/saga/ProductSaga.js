import { call, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_PRODUCTS, fetchProductsSuccess, fetchProductsFailure,
    FETCH_PRODUCT, fetchProductSuccess, fetchProductFailure,
    CREATE_PRODUCT, createProductSuccess, createProductFailure,
    EDIT_PRODUCT, editProductSuccess, editProductFailure,
    DELETE_PRODUCT, deleteProductSuccess, deleteProductFailure
} from './../action/ProductAction';
import api from './ProductApi'

function* getProducts() {

    try {
        const data = yield call(api.products);
        yield put(fetchProductsSuccess(data));

    } catch (error) {
        console.log("Products Fetch Error")
        yield put(fetchProductsFailure());
        console.error(error) // eslint-disable-line

    }
}
function* getProduct(action) {
    const { id } = action;
    try {
        const { data } = yield call(api.getproduct, id);
        yield put(fetchProductSuccess(data));
    } catch (err) {
        console.log("Products Fetch Error")
        //onFailure(err)
        yield put(fetchProductFailure())
    }
}

function* createProduct(action) {

    console.log("Action create Product is" + JSON.stringify(action))
    const { onSuccess, onFailure } = action
    try {

        const imgname = yield call(api.addImage, action.imagename)

        const { name, price } = action;
        let { data } = yield call(api.addproduct, { name, price, imagefile: imgname.data });
        console.log("add Product saga" + JSON.stringify(data))
        onSuccess(data)

    } catch (err) {
        //yield put(createProductFailure());
        console.log("ERROR IS" + JSON.stringify(err.response.data));
        onFailure(err.response.data)

    }
}

function* editProduct(action) {
    try {
        console.log("in saga Update Product" + JSON.stringify(action))
        const { name, price } = action.payload;
        const id = action.payload.id
        console.log("edit PROduct Saga" + " ID " + id + "name" + name + "Price" + price)
        const data = yield call(api.editproduct, id, name, price);
        //const response = yield call(api.products);
        console.log("Response in updateProduct" + JSON.stringify(data))
        //yield put(editProductSuccess(data));
    } catch (err) {
        console.log(err);
        //yield put(editProductFailure());
    }
}

function* deleteProduct(action) {
    try {
        console.log("REMOEV PROduct sasga" + JSON.stringify(action))
        const { id } = action;
        const data = yield call(api.deleteproduct, id);
        console.log("response is" + JSON.stringify(data))
        yield put(deleteProductSuccess(data));
    } catch (err) {
        yield put(deleteProductFailure())
        console.log(err);
    }
}
// Get the response of the latest request(s) 
export default function* ProductSaga() {

    yield takeLatest(FETCH_PRODUCTS, getProducts);
    yield takeLatest(FETCH_PRODUCT, getProduct);
    yield takeLatest(CREATE_PRODUCT, createProduct);
    yield takeLatest(EDIT_PRODUCT, editProduct);
    yield takeLatest(DELETE_PRODUCT, deleteProduct);
}

/*
function* getproduct(action) {
    try {
        const { _id } = action;
        const response = yield call(api.getproduct, _id);
        console.log("RESPOSE IN FETCH PRODUCT" + JSON.stringify(response))
        yield put({ type: FETCH_PRODUCT_SUCCESS, data: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* removeproduct(action) {
    try {
        // console.log("REMOEV PROduct sasga"+ JSON.stringify(action))
        const { _id } = action;
        yield call(api.deleteproduct, _id);
        const response = yield call(api.products);
        yield put({ type: 'DELETE_PRODUCT_SUCCESS', data: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* updateproduct(action) {
    try {
        //  console.log("in saga Update Product"+ JSON.stringify(action))
        const { data } = action.payload;
        const _id = action.payload._id
        //   console.log("data is in update product"+ JSON.stringify(data) + " ID "+ _id)
        yield call(api.editproduct, _id, data);
        const response = yield call(api.products);
        //  console.log("Response in updateProduct"+ JSON.stringify(response))
        yield put({ type: EDIT_PRODUCT_SUCCESS, data: response.data });
    } catch (err) {
        console.log(err);
    }
}
*/