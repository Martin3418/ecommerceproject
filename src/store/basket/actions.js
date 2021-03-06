export function add(_productId) {
  return {
    type: "ADD_PRODUCT_TO_BASKET",
    productId: _productId,
  }
}

export function remove(_productId) {
  return {
    type: "REMOVE_PRODUCT_TO_BASKET",
    productId: _productId,
  }
}

export function erase(_productId){
  return {
    type: "DELETE_PRODUCT_TO_BASKET",
    productId: _productId,
  }
}

export function clear(){
  return {
    type: "CLEAR_BASKET",
  }
}

export function fetching() {
  return {
    type: "FETCHING_BASKET"
  }
}

export function display(_basketList) {
  return {
    type: "DISPLAY_BASKET",
	  basketList: _basketList,
  }
}

export function mountError(_error) {
  return {
    type: "ERROR",
  	error: _error,
  }
}

export function setConnectionFlag() {
  return {
    type: "SET_CONNECTION_FLAG",
  }
}

export function removeConnectionFlag() {
  return {
    type: "REMOVE_CONNECTION_FLAG",
  }
}
