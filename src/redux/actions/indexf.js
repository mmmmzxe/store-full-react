export const addFa = (product) => {
    return {
        type : "ADDITEM",
        payload : product,
      
    }
}

export const delFa = (product) => {
    return {
        type : "DELITEM",
        payload : product, 
      
    }
}