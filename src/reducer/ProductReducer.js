

let initState = { products: [], product: {}, loading: true, success: undefined }


export const ProductReducer = (state = initState, action) => {

  // console.log("Action Type is" + action.type + JSON.stringify(action))
  switch (action.type) {
    case 'FETCH_PRODUCTS':
    case 'DELETE_PRODUCT':
    case 'CREATE_PRODUCT':
    case 'EDIT_PRODUCT':
    case 'FETCH_PRODUCT':
      return {
        ...state,
        loading: true,


      }
    case 'FETCH_PRODUCTS_SUCCESS':

      return {
        ...state,
        products: action.data.products,
        success: action.data.success,
        loading: false
      }
    case 'FETCH_PRODUCT_SUCCESS':
      return {
        ...state,
        product: action.data.product,
        success: action.data.success,
        loading: false
      }
    case 'CREATE_PRODUCT_SUCCESS':
      return {
        ...state,
        products: state.products.concat(action.data.product),
        product: action.data.product,
        success: action.data.success,
        loading: false
      }
    case 'EDIT_PRODUCT_SUCCESS':
      return {
        ...state,
        products: state.products.concat(action.data.product),
        product: action.data.product,
        success: action.data.success,
        loading: false
      }
    case 'DELETE_PRODUCT_SUCCESS':
      return {
        ...state,
        products: state.products.filter(product => product._id !== action.data.id),
        product: action.data.product,
        success: action.data.success,
        loading: false
      }
    case 'ADD_PRODUCT_FAILURE':
    case 'DELETE_PRODUCT_FAILURE':
    case 'EDIT_PRODUCT_FAILURE':
    case 'FETCH_PRODUCTS_FAILURE':
    case 'FETCH_PRODUCT_FAILURE':
    case 'CREATE_PRODUCT_FAILURE':
      return {
        ...state,
        loading: false,
        success: false,
      }

    default:
      return state
  }
}


