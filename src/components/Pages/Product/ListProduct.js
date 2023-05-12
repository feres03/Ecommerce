import React, { useEffect, useState } from 'react'
import Product from '../../services/Product'


function ProductsList() {
  const [products, setProducts] = useState([])

  const fetchdata = async () => {
    const list = await Product.getProduct()
    setProducts(list.data)


  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <table className="table table-striped mt-3" style={{ backgroundColor: '#e3f2fd' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Disponibility</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Image</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          <th >Update</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        {
          products.map((product, index) => {
            return (
              <tr key={index}>
                <td>
                  {product.name}
                </td>
                <td>
                  {product.disponibility}
                </td>
                <td>
                  {product.brand}
                </td>
                <td>
                  {product.description}
                </td>
                <td>
                  {product.category}
                </td>
                <td>
                  {product.quantity}
                </td>
                <td>
                  {product.price}
                </td>

                <td>
                  <button className='btn btn-success' >Update</button>
                </td>
                <td>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>


            )

          }
          )
        }
      </tbody>
    </table>
  )
}

export default ProductsList