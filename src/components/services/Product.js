import http from '../../utils/http'


const addProduct = (data) => {
    return http.post('/product', data)
}
const getProduct = (data) => {
    return http.get = ('/product', data)
}
// const deleteProduct = (data) => {
//     return http.delete('/product/:id', data)
// }



const Product = {
    addProduct,
    getProduct,
    // deleteProduct

}
export default Product