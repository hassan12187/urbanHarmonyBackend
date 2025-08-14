const cacheMap=new Map();

export const setLimitProductCache=(products)=>{
    cacheMap.set("limited-product",products);
    setTimeout(() => {
        cacheMap.delete("limited-product");
    }, 3600000);
};
export const getLimitedProductFromCache=()=>{
    return cacheMap.get("limited-product");
}
export const setProductsCache=(products)=>{
    cacheMap.set("products",products);
    setTimeout(()=>{
        cacheMap.delete("products");
    },3600000)
}
export const getProductsCache=()=>{
    return cacheMap.get("products");
}