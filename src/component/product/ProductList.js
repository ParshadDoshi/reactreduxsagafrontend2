import React, { useEffect } from "react";
import { useToasts } from 'react-toast-notifications'
import { useSelector, useDispatch } from 'react-redux'
import ProductListDetails from './../product/ProductListDetails'
import { fetchProducts } from './../../action/ProductAction'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import './table.css'

function ProductList({ match }) {

  const dispatch = useDispatch();

  const loading = useSelector(state => state.loading)
  const products = useSelector(state => state.products);

  const { addToast } = useToasts()

  const success = useSelector(state => state.success)






  useEffect(() => {

    dispatch(fetchProducts())



  }, [])


  if (loading) return <p>Loading...</p>
  // if (products.length === 0) return <div>No Products.</div>

  return (
    <div>
      <Link to={`products/create`} style={{ display: 'flex', flexDirection: 'row-reverse' }}>Add Product</Link>
      {products.length > 0 ? (
        <div className="Table">
          <div className="TableRow TableHeader" >
            <div className="TableRowItem">Item Name</div>
            <div className="TableRowItem">Price</div>
            <div className="TableRowItem"></div>
            <div className="TableRowItem"></div>
            <div className="TableRowItem"></div>
          </div>
          {products.map(p => <ProductListDetails product={p} />)}
        </div>) : (
          <p>No Products to display</p>
        )}
    </div>

  )
}


export default ProductList