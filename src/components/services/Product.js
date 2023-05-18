import http from '../../utils/http'


const addProduct = (data) => {
    return http.post('/product', data)
}
const ListProducts = () => {
    return http.get('/product')
}
const getProductById = (id) => {
    return http.get(`/product/${id}`)
}
const updateProduct = (id, data) => {
    return http.put(`/product/${id}`, data)
}
const deleteProduct = (id) => {
    return http.delete(`/product/${id}`)
}



const Product = {
    addProduct,
    ListProducts,
    getProductById,
    updateProduct,
    deleteProduct

}
export default Product