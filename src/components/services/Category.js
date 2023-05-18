import http from '../../utils/http'
const addCategory = (data) => {
    return http.post('/category', data)
}
const ListCategory = () => {
    return http.get('/category')
}
const ListCategoryForProduct = () => {
    return http.get('/categoryForProduct')
}
const deleteCategory = (id) => {
    return http.delete(`/category/${id}`)
}
const getCategoryById = (id) => {
    return http.get(`/category/${id}`)
}

const updateCategory = (id, data) => {
    return http.put(`/category/${id}`, data)
}
const Category = {
    addCategory,
    ListCategory,
    deleteCategory,
    getCategoryById,
    updateCategory,
    ListCategoryForProduct
}
export default Category