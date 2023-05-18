import React, { useEffect, useState } from "react"
import Product from "../../services/Product"
import { Link } from "react-router-dom";


const ListProduct = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchdata = async () => {
      const list = await Product.ListProducts();
      setProducts(list.data.data);
    };
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const list = await Product.ListProducts();
    setProducts(list.data.data);
  };

  const handleDelete = async (_id) => {
    await Product.deleteProduct(_id);
    fetchdata();
  };

  return (
    <div>
      <table className="table table-striped mt-3" style={{ backgroundColor: '#e3f2fd' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 && products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>
                    {product.name}
                  </td>
                  <td>
                    <img src={product.imageLink} alt="" width="50px" />
                  </td>
                  <td>
                    <ul>
                      {product.category.map(e => { return <li key={e.name}>{e.name}</li> })}
                    </ul>
                  </td>
                  <td>
                    {product.price}
                  </td>
                  <td >
                    <Link to={`/UpdateProduct/${product._id}`} className='btn btn-success me-2'>Update</Link>
                    <button className='btn btn-danger' onClick={() => { handleDelete(product._id) }}>Delete</button>
                  </td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListProduct