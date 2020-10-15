import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './../../action/ProductAction'


const API_KEY = process.env.REACT_APP_API_KEY;
export const ProductDetails = ({ match }) => {
  console.log("Match In Product Details" + JSON.stringify(match))

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
  const product = useSelector(state => state.product)
  const success = useSelector(state => state.success)


  useEffect(() => {

    if (match.path === "/products/:id") {

      history.replace(`/products/${match.params.id}`)
    }

    dispatch(fetchProduct(match.params.id))

    console.log("SUCCESS IN PRODUCT DETAILS IS" + success)
    if (success === false) {
      history.push('/*')
    }


  }, [success])




  function gotoProducts() {

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