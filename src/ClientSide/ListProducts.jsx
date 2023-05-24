import React from 'react'
import prod from './pictures/prod1.png'


const ListProducts = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className="card m-5 d-flex justify-content-center" style={{ width: "18rem" }}>
                <img src={prod} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> </h5>

                    <p className="card-text">Description:</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Disponibility:</li>
                    <li className="list-group-item">Price:</li>
                    <li className="list-group-item">Quantity:</li>
                </ul>
                <div className="card-body justify-content-center d-flex">
                    <button className='btn btn-success '>Add to cart</button>

                </div>
            </div>

        </div>
    )

}

export default ListProducts