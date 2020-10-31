import React, { useEffect } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, fetchProductSuccess, fetchProductFailure } from './../../action/ProductAction'
import { useToasts } from 'react-toast-notifications'

const API_KEY = process.env.REACT_APP_API_KEY;
export const ProductDetails = ({ match }) => {
  const { addToast } = useToasts()
  console.log("Match In Product Details" + JSON.stringify(match))
  const location = useLocation();
  console.log("Location IS:" + JSON.stringify(location))

  const loading = useSelector(state => state.ProductReducer.loading)

  const onSuccess = data => {
    dispatch(fetchProductSuccess(data))
  }
  const onFailure = err => {
    addToast('Server Fetch Error', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 5000 })
    // dispatch(fetchProductFailure())
  }
  const row = {
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    width: '100%'
  };

  const column = {
    display: 'flex',
    'flex-direction': 'column',
    'flex-basis': '100%',
    flex: 1
  }

  const history = useHistory()
  const dispatch = useDispatch();
  const product = useSelector(state => state.ProductReducer.product)

  useEffect(() => {
    console.log("PRODUCT IS" + JSON.stringify(product))
    dispatch(fetchProduct(match.params.id, onSuccess, onFailure))
  }, [])

  const gotoProducts = () => {
    console.log('goto called');
    history.push('/products')
  }

  return (

    <div class="card">
      <div class="card-header">
        {product.name}
      </div>
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <div style={row}>
          <div style={column}>
            <img src={`${API_KEY}` + '/assets/' + `${product.imagefilename}`} alt="Not Available" /></div>
          <div style={column}>
            <p class="card-text">Product Description is yet to be defined</p></div>
        </div>

        <button onClick={gotoProducts}>Go back to Product List</button>
      </div>
    </div>

  );

};