import React, { useEffect } from "react";
import { useToasts } from 'react-toast-notifications'
import { useSelector, useDispatch } from 'react-redux'
import ProductListDetails from './../product/ProductListDetails'
import { fetchProducts, fetchProductsSuccess, fetchProductsFailure } from './../../action/ProductAction'
import { Link } from 'react-router-dom'
import { FadeLoader } from "react-spinners";
import './table.css'

function ProductList() {

  const { addToast } = useToasts()
  const dispatch = useDispatch();
  const loading = useSelector(state => state.ProductReducer.loading)
  const products = useSelector(state => state.ProductReducer.products);

  /* const onSuccess = data => {

    dispatch(fetchProductsSuccess(data))
  }
  const onFailure = err => {
    addToast('Server Fetch Error', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 5000 })
    dispatch(fetchProductsFailure())
  } */

  let NoproductStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'

  }

  useEffect(() => {

    dispatch(fetchProducts())

  }, [])

  if (loading) return <FadeLoader color={"lightblue"} size={150} style={NoproductStyle} />

  return (
    <div>

      { products.length > 0 && <div>
        <Link to={`products/create`} style={{ display: 'flex', flexDirection: 'row-reverse' }}>Add Product</Link>
        <div className="Table">
          <div className="TableRow TableHeader" >
            <div className="TableRowItem">Item Name</div>
            <div className="TableRowItem">Price</div>
            <div className="TableRowItem"></div>
            <div className="TableRowItem"></div>
            <div className="TableRowItem"></div>
          </div>
          {products.map(p => <ProductListDetails product={p} />)}
        </div>
      </div>}
    </div>

  )
}

export default ProductList