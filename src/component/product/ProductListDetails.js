import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { deleteProduct } from './../../action/ProductAction'
import { addCart } from './../../action/CartAction'
import './table.css'

export const ProductListDetails = ({ product }) => {

  console.log("PRODUCT LIST DETAIL IS CALLED")
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoggedIn = useSelector(state => state.UserReducer.isLoggedIn)
  function deleteProductConfirmation() {

    swal({
      title: "Are you sure to DELETE?",
      text: "Once deleted, you will not be able to recover",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          dispatch(deleteProduct(product._id))
          history.push("/products")
        }
      });
  }

  return (
    <div>
      <div className="TableRow">
        <div className="TableRowItem" > {product.name}</div>
        <div className="TableRowItem">
          {product.price.toFixed(2)} &#8377;
      </div>

        <div className="TableRowItem">
          <Link to={`/products/update/${product._id}`}  >Edit Product </Link></div>
        <div className="TableRowItem">
          <Link to={`/products/${product._id}`}   >View Details</Link></div>

        <div className="TableRowItem">
          <button className="btn btn-sm btn-danger" onClick={deleteProductConfirmation}>Delete Product</button>
        </div>
      </div>
      <div className="TableRow">
        <div className="TableRowItem">
          <Link className="btn btn-success btn-sm float-left" to={`/cart/add/${product._id}`}  >Add to Cart </Link>

        </div>
      </div>
    </div>

  )
}
export default ProductListDetails