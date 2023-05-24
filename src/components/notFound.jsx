import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div>
                <h1>404 not found</h1>
                <input type="text" className='form-control' onChange={({ currentTarget }) => setSearch(currentTarget.value)} />
                <button className='btn btn-primary w-100 mt-3' onClick={() => { navigate(search) }}>Search</button>
            </div>
        </div>
    )
}

export default NotFound