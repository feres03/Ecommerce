import React, { useEffect, useState } from 'react'
import Category from '../../services/Category'
import { Link } from 'react-router-dom'



const ListCategory = () => {
  const [categories, setCategories] = useState([])

  const fetchdata = async () => {
    const list = await Category.ListCategory()
    setCategories(list.data)
  }
  useEffect(() => {
    fetchdata()
  }, [])
  const handleDelete = async (_id) => {
    await Category.deleteCategory(_id)
    fetchdata()
  }

  return (
    <div>
      <table className="table table-striped mt-3" style={{ backgroundColor: '#e3f2fd' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            categories.map((category, index) => {
              console.log(category._id)
              return (
                <tr key={index}>
                  <td>
                    {category.name}
                  </td>
                  <td>
                    {category.description}
                  </td>
                  <td>
                    <Link to={`/UpdateCategory/${category._id}`} className='btn btn-success'>Update</Link>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => { handleDelete(category._id) }}>Delete</button>
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

export default ListCategory