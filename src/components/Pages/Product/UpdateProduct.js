import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Product from '../../services/Product';
import Select from 'react-select';

function Updateproduct() {
    const [product, setProduct] = useState()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const fetch = async () => {
            const response = await Product.getProductById(params.id)
            setProduct(response.data)
        }
        fetch()
    }, [params.id])

    return (
        <div className='container mt-5'>
            <h3 className='text-center text-success'>Update Category</h3>
            <div className="row  d-flex justify-content-center">
                <Formik
                    initialValues={product || { name: '', price: '', disponibility: '', brand: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = "Ce champs est obligatoire."
                        }
                        if (!values.category) {
                            errors.category = "Ce champs est obligatoire."
                        }
                        if (!values.price) {
                            errors.price = 'Ce champs est obligatoire.'
                        }
                        return errors;
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const response = await Product.updateProduct(params.id, values)
                            navigate('/products')
                            toast.success(response.data.message)
                        } catch (error) {
                            toast.error(error.response.data.message)

                        }
                    }}
                    enableReinitialize
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className='col-6' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    name="name"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} />
                            </div>
                            {errors.name && touched.name && <div className="alert alert-danger" role="alert">{errors.name} </div>}
                            <div className="mb-3">
                                <input type="text" className="form-control"
                                    placeholder='Disponibility'
                                    name="disponibility"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.disponibility} />
                            </div>
                            {errors.disponibility && touched.disponibility && <div className="alert alert-danger" role="alert">{errors.disponibility} </div>}
                            <div className="mb-3">
                                <input type="text" className="form-control"
                                    placeholder='Brand'
                                    name="brand"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.brand} id="brand" />
                            </div>
                            {errors.brand && touched.brand && <div className="alert alert-danger" role="alert">{errors.brand} </div>}

                            <div className="mb-3">
                                <textarea type="text" className="form-control"
                                    placeholder='Description'
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description} id="description" />
                            </div>
                            {errors.description && touched.description && <div className="alert alert-danger" role="alert">{errors.description} </div>}

                            <div className="mb-3">
                                <input className="form-control"

                                    type="file" />
                            </div>
                            <Select className='mb-3'
                                placeholder='Category'
                            />


                            <div className="mb-3">
                                <input type="number" className="form-control"
                                    placeholder='Quantity'
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.quantity} id="quantity" />
                            </div>
                            {errors.quantity && touched.quantity && <div className="alert alert-danger" role="alert">{errors.quantity} </div>}



                            <div className="mb-3">

                                <input type="number" className="form-control" placeholder="Price /Dt"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price} id="price" />
                            </div>
                            {errors.price && touched.price && <div className="alert alert-danger" role="alert">{errors.price} </div>}




                            <button className="btn btn-secondary w-100" type="submit" >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default Updateproduct