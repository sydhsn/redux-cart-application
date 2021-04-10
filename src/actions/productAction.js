import shop from '../api/';
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_DATA_STARTED,
  ADD_DATA_SUCCESS
} from "./actionType";


export const loadData =()=> (dispatch) => {
  shop.getProducts(products => {
    dispatch(loadDataSuccess(products))
  })
}

export const loadDataSuccess = products => ({
  type: ADD_DATA_SUCCESS,
  products
});

export const loadDataStarted = () => {
  return {
    type: ADD_DATA_STARTED
  };
};

export const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};

export const addQuantity = id => {
  debugger;
  return {
    type: ADD_QUANTITY,
    id
  };
};
